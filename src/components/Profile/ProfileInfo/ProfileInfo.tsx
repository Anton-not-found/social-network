import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/preloader";
import noAvatar from "../../../assets/images/noAvatar.png"

type ProfileInfoPropsType = {
    profile: ProfileType
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.profileItem}>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=7be932d526d34f5966e9546f322667e76781228e-8311686-images-thumbs&n=13'}
                    alt={''}/>
            </div>
            <div className={s.avaDescription}>
                <img src={props.profile.photos.small !== null ? props.profile.photos.small : noAvatar} alt={''}/>
                <div className={s.fullName}>---{props.profile.fullName}---</div>
                <div className={s.aboutMe}><span>{props.profile.aboutMe}</span></div>
                <span>Ищу работу <input type={"checkbox"} checked={props.profile.lookingForAJob}/> </span>
            </div>
        </div>
    );
};

