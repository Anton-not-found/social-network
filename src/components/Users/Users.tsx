import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/userPhoto.png'

export const settings = {
    withCredentials: true,
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, settings)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    }
     onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, settings)
             .then((res) => {
                 this.props.setUsers(res.data.items)
             });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <div className={s.users}>
            <div>
                {pages.map((p, index) => {

                    return (
                        <span key={index}
                              className={this.props.currentPage === p ? s.selectedPage : s.page}
                              onClick={()=>{this.onPageChanged(p)}}
                        >{p}</span>)
                })}
            </div>
            {
                this.props.users.map((el, index) => {

                    const onclickFollowHandler = () => {
                        this.props.follow(el.id)
                    }
                    const onclickUnfollowHandler = () => {
                        this.props.unFollow(el.id)
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
        </div>;
    }
}