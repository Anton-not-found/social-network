import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchTsarType} from "../../redux/state";


export type ProfilePageType = {
    posts: Array<PostType>
    dispatch: (action:DispatchTsarType)=> void
    messagePost:string

}

export type PostType ={
    id: string
    message: string
    likesCount: string
}


export const Profile = (props:ProfilePageType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}
                     messagePost={props.messagePost}

            />
        </div>
    );
};

