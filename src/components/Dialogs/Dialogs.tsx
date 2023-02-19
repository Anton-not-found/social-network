import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Anton'} id={1}/>
                <DialogItem name={'Elena'} id={2}/>
                <DialogItem name={'Stepan'} id={3}/>
                <DialogItem name={'Mariya'} id={4}/>
            </div>
            <div className={s.messagesItem}>
                <MessageItem message={'Hi'}/>
                <MessageItem message={'How are you?'}/>
                <MessageItem message={'What are you learn?'}/>
                <MessageItem message={'Oh my!'}/>
            </div>
        </div>
    );
};

