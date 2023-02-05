import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div className={s.posts}>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <Post message={'Hi! How are you?'}/>
                    <Post message={'It is my first post))'}/>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;