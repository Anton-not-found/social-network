import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {settings} from "./UsersContainer";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (userId: number, isFetching: boolean) => void
}

export const Users = (props: UsersPropsType) => {

        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.users}>
                <div>
                    {pages.map((p, index) => {
                        return (
                            <span key={index}
                                  className={props.currentPage === p ? s.selectedPage : s.page}
                                  onClick={() => {
                                      props.onPageChanged(p)
                                  }}
                            >{p}</span>)
                    })}
                </div>
                {
                    props.users.map((el, index) => {

                        const onclickFollowHandler = () => {
                            props.toggleFollowingProgress(el.id,true)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, settings)
                                .then((responce) => {
                                    if (responce.data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                    props.toggleFollowingProgress(el.id,false)
                                });

                        }
                        const onclickUnfollowHandler = () => {
                            props.toggleFollowingProgress(el.id,true)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, settings)
                                .then((responce) => {
                                    if (responce.data.resultCode === 0) {
                                        props.unFollow(el.id)
                                    }
                                    props.toggleFollowingProgress(el.id,false)
                                });
                        }

                        return (
                            <div key={index}>
                            <span>
                        <div className={s.photo}>
                            <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt={''}/>
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                                          onClick={onclickUnfollowHandler}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=> id === el.id)}
                                          onClick={onclickFollowHandler}>Follow</button>
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
        )
    }
;

