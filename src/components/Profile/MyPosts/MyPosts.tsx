import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div className={s.posts}>
               <h3> My posts </h3>
                <div className={s.texareaButton}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.postItem}>
                    <Post message={'Hi! How are you?'}/>
                    <Post message={'It is my first post))'}/>
                </div>
            </div>
        </div>
    );
};

