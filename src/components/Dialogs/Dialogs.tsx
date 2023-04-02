import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogType, DispatchTsarType, MessageType} from "../../redux/state";
import {changeNewMessageTextAC, sendMessageAC} from "../../redux/dialogs-reducer";

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action:DispatchTsarType)=> void

}
export const Dialogs = (props: DialogsPageType) => {

    let dialogsDataMap = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesDataMap = props.messages.map(m => <MessageItem id={m.id} message={m.message}/>)
    let newMessageBody = props.newMessageBody

    const onSendMessageHandler = () => {
        props.dispatch(sendMessageAC())
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(changeNewMessageTextAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsDataMap}
            </div>
            <div className={s.messagesItem}>
                {messagesDataMap}
            </div>
            <div className={s.textarea}>
               <span>
                <textarea value={newMessageBody} onChange={onChangeMessageHandler}></textarea>
                <button onClick={onSendMessageHandler}>add Messsage</button>
               </span>
            </div>
        </div>
    );
};

