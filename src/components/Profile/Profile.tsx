import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootActionType} from "../../index";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PostType = {
    id: string
    message: string
    likesCount: string
}

type ProfilePropsType = {
    posts: Array<PostType>
    messagePost: string
    dispatch: (action: RootActionType) => void
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer posts={props.posts}
                              dispatch={props.dispatch}
                              messagePost={props.messagePost}
            />
        </div>
    );
};

