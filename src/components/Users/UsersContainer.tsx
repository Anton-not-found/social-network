import {Users} from "./Users";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeFollowAC,
    changeUnFollowAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    UsersType,
    UserType
} from "../../redux/users-reducer";

type MapStateToPropsType = UsersType


type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(pageNumber: number)=>void
    setTotalUsersCount:(totalCount: number)=>void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(changeFollowAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(changeUnFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
