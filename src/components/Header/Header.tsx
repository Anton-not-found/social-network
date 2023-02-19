import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerLogo}>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=6e33115c874306a061b58854df85a2b8-5518476-images-thumbs&n=13'} alt={'logo'}>
                </img>
            </div>

        </div>
    );
};

