import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {RootActionType} from "../../../index";

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

export const MyPosts = (props: ProfilePagePropsType) => {

    let postsDataElements = props.posts.map((p,i) => <Post key={i} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    console.log(props.messagePost)
    const onClickButtonHandler = () => {
        props.dispatch(addPostAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(changeNewTextAC(text))
    }

    return (
        <div className={s.myPosts}>
            <div className={s.posts}>
                <h3> My posts </h3>
                <div className={s.texareaButton}>
                    <textarea value={props.messagePost} onChange={onChangeHandler}/>
                    <button onClick={onClickButtonHandler}>Add post</button>
                </div>
                <div className={s.postItem}>
                    {postsDataElements}
                </div>
            </div>
        </div>
    );
};

