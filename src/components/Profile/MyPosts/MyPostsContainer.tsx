import React from 'react';
import s from './MyPosts.module.css';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {RootActionType} from "../../../index";
import {MyPosts} from "./MyPosts";
import {AppRootState} from "../../../redux/redux-store";

export type ProfilePagePropsType = {
    posts: Array<PostType>
    dispatch: (action: RootActionType) => void
    messagePost: string
}

export type PostType = {
    id: string
    message: string
    likesCount: string
}

export const MyPostsContainer = (props: ProfilePagePropsType) => {

    const onClickButtonHandler = () => {
        props.dispatch(addPostAC())
    }
    const onChangeHandler = (text: string) => {
        props.dispatch(changeNewTextAC(text))
    }
    return (
        <div className={s.myPosts}>
            <MyPosts posts={props.posts} messagePost={props.messagePost} addPost={onClickButtonHandler}
                     updateNewPostText={onChangeHandler}/>
        </div>
    );
};

