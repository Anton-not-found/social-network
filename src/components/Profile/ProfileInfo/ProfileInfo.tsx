import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileItem}>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=7be932d526d34f5966e9546f322667e76781228e-8311686-images-thumbs&n=13'}
                    alt={''}/>
            </div>
            <div className={s.avaDescription}>
                ava + description
            </div>
        </div>
    );
};

