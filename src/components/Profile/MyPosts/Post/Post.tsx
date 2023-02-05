import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
}


const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.postItem}>
                <img src={'https://avatars.mds.yandex.net/i?id=fd70dfbebe332311e7e5f189dcbedba36fc4ed13-8497195-images-thumbs&n=13'} alt={''}/>
                {props.message}
            </div>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;