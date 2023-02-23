import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


export const MyPosts = (props:ProfilePageType) => {

    let postsDataElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);


    return (
        <div className={s.myPosts}>
            <div className={s.posts}>
                <h3> My posts </h3>
                <div className={s.texareaButton}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.postItem}>
                    {postsDataElements}
                </div>
            </div>
        </div>
    );
};

