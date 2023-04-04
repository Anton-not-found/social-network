import React from 'react';
import s from './Dialogs.module.css';

import {RootActionType} from "../../index";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {sendMessageAC, changeNewMessageTextAC} from "../../redux/dialogs-reducer"
import {Dialogs} from "./Dialogs";

type DialogsPagePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: RootActionType) => void
}
export const DialogsContainer = (props: DialogsPagePropsType) => {
    const onSendMessageHandler = () => {
        props.dispatch(sendMessageAC())
    }
    const onChangeMessageHandler = (body: string) => {
        props.dispatch(changeNewMessageTextAC(body))
    }

    return (
        <div className={s.dialogs}>
            <Dialogs dialogs={props.dialogs} messages={props.messages} newMessageBody={props.newMessageBody}
                     updateNewMessageBody={onChangeMessageHandler} sendMessage={onSendMessageHandler}/>
        </div>
    );
};

