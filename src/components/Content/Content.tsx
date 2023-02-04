import React from 'react';
import s from './Content.module.css';
const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.contentItem}>
                <img src={'https://avatars.mds.yandex.net/i?id=7be932d526d34f5966e9546f322667e76781228e-8311686-images-thumbs&n=13'} alt={''}/>
            </div>
        </div>
    );
};

export default Content;