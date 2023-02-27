import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../redux/state";

export const Dialogs = (props: DialogsPageType) => {

    let dialogsDataMap = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesDataMap = props.messages.map(m => <MessageItem id={m.id} message={m.message}/>)


    let newMessageRef = React.createRef<HTMLTextAreaElement>();
    const onClickButtonHandler = () => {
        alert(newMessageRef.current?.value)
    }
debugger

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
                <textarea ref={newMessageRef}></textarea>
                <button onClick={onClickButtonHandler}>add Messsage</button>
               </span>
            </div>
        </div>
    );
};

