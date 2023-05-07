import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts = (props: MyPostsPropsType) => {

    let postsDataElements = props.posts.map((p,i) => <Post key={i} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    const onClickButtonHandler = () => {
        props.addPost();
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
       props.changeNewText(text)
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

