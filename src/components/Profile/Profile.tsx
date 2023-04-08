import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {store} from "../../redux/redux-store";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer updateNewPostText={store.getState} />
        </div>
    );
};

