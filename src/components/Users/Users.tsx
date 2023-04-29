import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/userPhoto.png'

export const settings = {
    withCredentials: true,
}
export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users', settings)
            .then((res) => {
                props.setUsers(res.data.items)

            });
    }

    return (
        <div className={s.users}>
            {
                props.users.map((el, index) => {

                    const onclickFollowHandler = () => {
                        props.follow(el.id)

                    }
                    const onclickUnfollowHandler = () => {
                        props.unFollow(el.id)

                    }

                    return (
                        <div key={index}>
                            <span>
                        <div className={s.photo}>
                            <img
                                src={el.photos.small !== null ? el.photos.small : userPhoto} alt={''}/>
                        </div>
                        <div>
                            {el.fallowed
                                ? <button onClick={onclickUnfollowHandler}>Unfollow</button>
                                : <button onClick={onclickFollowHandler}>Follow</button>
                            }

                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </span>
                        </div>)
                })
            }
        </div>
    );
};

