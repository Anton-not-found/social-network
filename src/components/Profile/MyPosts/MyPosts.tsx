import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type ProfilePagePropsType = {
    posts: Array<PostType>
    messagePost: string
    updateNewPostText:(text:string)=>void
    addPost: ()=>void
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
        props.addPost();
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
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

