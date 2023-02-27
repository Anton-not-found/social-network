import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type ProfilePageType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

export type PostType = {
    id: string
    message: string
    likesCount: string
}
export const MyPosts = (props: ProfilePageType) => {

    let postsDataElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let postMessageRef = React.createRef<HTMLTextAreaElement>();  //создаём ссылку для привязки к value

    const onClickButtonHandler = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
            postMessageRef.current.value = '';
        }
    }


    return (
        <div className={s.myPosts}>
            <div className={s.posts}>
                <h3> My posts </h3>
                <div className={s.texareaButton}>
                    <textarea ref={postMessageRef}></textarea>
                    <button onClick={onClickButtonHandler}>Add post</button>
                </div>
                <div className={s.postItem}>
                    {postsDataElements}
                </div>
            </div>
        </div>
    );
};

