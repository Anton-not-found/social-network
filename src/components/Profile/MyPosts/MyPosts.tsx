import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


export type postsDataType = Array<postType>

export type postType = {
    id:number
    message: string
    likesCount: string
}

let postsData = [
    {id: 1, message: 'Hi! How are you?',likesCount: '0'},
    {id: 2, message: 'It is my first post))',likesCount: '5'}
]

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
                    <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                    <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                </div>
            </div>
        </div>
    );
};

