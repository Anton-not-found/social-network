import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
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
                            props.follow(el.id)
                        }
                        const onclickUnfollowHandler = () => {
                            props.unFollow(el.id)
                        }

                        return (
                            <div key={index}>
                            <span>
                        <div className={s.photo}>
                            <NavLink to={'/profile/*' + el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt={''}/>
                            </NavLink>
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
        )
    }
;

