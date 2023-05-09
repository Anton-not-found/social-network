import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {
    followAC,
    unFollowAC,
    setCurrentPageAC,
    setUsersAC, toggleIsFetchingtAC,
    UsersType,
    UserType, setTotalUsersCountAC, toggleFollowingProgressAC
} from "../../redux/users-reducer";
import React from "react";
import {Users} from './Users';
import {Preloader} from "../common/preloader/preloader";
import {usersAPI} from "../../api/api";



type MapStateToPropsType = UsersType


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetchingt: (isFetching: boolean) => void
    toggleFollowingProgress: (userId: number, isFetching: boolean)=>void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "258c7efb-8639-4fa5-87de-e07b185f8dee"   // работает и без этого
    }
}

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetchingt(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetchingt(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetchingt(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetchingt(false)
                this.props.setUsers(res.data.items)
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}



            />
        </>
    }
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetchingt: toggleIsFetchingtAC,
    toggleFollowingProgress: toggleFollowingProgressAC

})(UsersContainer)
