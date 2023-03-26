import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type ProfilePagePropsType = {
    posts: Array<PostType>
    addPost: () => void
    changeNewTextCallback: (newText: string) => void
    messagePost: string
}

export type PostType = {
    id: string
    message: string
    likesCount: string
}
export const MyPosts = (props: ProfilePagePropsType) => {

    let postsDataElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    console.log(props.messagePost)
    const onClickButtonHandler = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)

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

