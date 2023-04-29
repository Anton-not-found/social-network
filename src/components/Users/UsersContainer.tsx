import {Users} from "./Users";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {changeFollowAC, changeUnFollowAC, setUsersAC, UsersType, UserType} from "../../redux/users-reducer";

type MapStateToPropsType = UsersType



type MapDispatchToPropsType = {
    follow: (userId: string)=>void
    unFollow:(userId: string)=>void
    setUsers:(users: Array<UserType>)=>void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootState):MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(changeFollowAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(changeUnFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {

            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
