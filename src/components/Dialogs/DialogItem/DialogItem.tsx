import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number

}

export const DialogItem = (props: DialogItemPropsType) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialogItem}>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
};
