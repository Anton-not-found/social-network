import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";


export type dialogsDataType = {
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>
}

export type dialogType = {
    id: number
    name: string
}

export type messageType = {
    id:number
    message:string
}

let dialogsData = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Elena'},
    {id: 3, name: 'Stepan'},
    {id: 4, name: 'Mariya'},
]

let messagesData = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you?'},
    {id:3, message:'What are you learn?'},
    {id:4, message:'Oh my!'}
]


export const Dialogs = () => {

    let dialogsDataMap = dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)
    let messagesDataMap = messagesData.map(m => <MessageItem id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsDataMap}
            </div>
            <div className={s.messagesItem}>
                {messagesDataMap}
            </div>
        </div>
    );
};

