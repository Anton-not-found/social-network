import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";


export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyl8UyqMZ3Du48kkWyWcGxWKPoAYbGpoUPw&usqp=CAU',
                fallowed: false,
                fullName: 'Antonio',
                status: 'I\'m big boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyl8UyqMZ3Du48kkWyWcGxWKPoAYbGpoUPw&usqp=CAU',
                fallowed: true,
                fullName: 'Andrew',
                status: 'I\'m small boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyl8UyqMZ3Du48kkWyWcGxWKPoAYbGpoUPw&usqp=CAU',
                fallowed: false,
                fullName: 'Sasha',
                status: 'I\'m  a pffff',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div className={s.users}>
            {
                props.users.map(el => {

                    const onclickFollowHandler = () => {
                        props.follow(el.id)

                    }
                    const onclickUnfollowHandler = () => {
                        props.unFollow(el.id)

                    }

                    return (
                        <div key={el.id}>
                    <span>
                        <div className={s.photo}>
                            <img
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyl8UyqMZ3Du48kkWyWcGxWKPoAYbGpoUPw&usqp=CAU'} alt={''}/>
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
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                        </div>)
                })
            }
        </div>
    );
};

