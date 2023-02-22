import React from 'react';
import s from './MessageItem.module.css';

type MesssageItemPropsType = {
    id: number
    message: string
}

export const MessageItem = (props:MesssageItemPropsType) => {
    return (
            <div className={s.messagesItem}>
                <div className={s.message}>{props.message}</div>
            </div>
    );
};

