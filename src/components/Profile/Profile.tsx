import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootActionType} from "../../index";


//
// export type ProfilePageType = {
//     posts: Array<PostType>
//     dispatch: (action:DispatchTsarType)=> void
//     messagePost:string
//
// }
 type PostType ={
    id: string
    message: string
    likesCount: string
}
 //
 //  type MessageType = {
 //     id: string
 //     message: string
 // }

type ProfilePropsType = {
    posts:Array<PostType>
    messagePost:string
    dispatch:(action:RootActionType)=>void
}


export const Profile = (props:ProfilePropsType) => {
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

