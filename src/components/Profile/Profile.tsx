import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export type ProfilePageType = {
    posts: Array<PostType>
    addPost: (postMessage: string)=> void
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
                     addPost={props.addPost}/>
        </div>
    );
};

