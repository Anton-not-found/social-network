import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {sendMessageAC, changeNewMessageTextAC} from "../../redux/dialogs-reducer"
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {

    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(changeNewMessageTextAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer