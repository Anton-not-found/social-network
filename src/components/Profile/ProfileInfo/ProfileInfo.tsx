import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}
export const ProfileInfo = (props:ProfileInfoPropsType) => {
    console.log(props)
    if(props.profile == null || {}){
        return <Preloader />
    }


    return (
        <div>
            <div className={s.profileItem}>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=7be932d526d34f5966e9546f322667e76781228e-8311686-images-thumbs&n=13'}
                    alt={''}/>
            </div>
            <div className={s.avaDescription}>
                <img src={props.profile.photos.large} alt={''}/>
                ava + description
            </div>
        </div>
    );
};

