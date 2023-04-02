import {DialogsPageType, DispatchTsarType} from "./state";
import {v1} from "uuid";


type DialogsStateType = DialogsPageType
export const DialogsReducer = (state: DialogsStateType, action:DispatchTsarType ): DialogsStateType => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.messages.push({id: v1(), message: body});
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export const changeNewMessageTextAC = (body: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-BODY',
        body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
