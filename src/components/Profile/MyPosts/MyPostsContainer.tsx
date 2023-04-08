import React from 'react';
import s from './MyPosts.module.css';
import {addPostAC, changeNewTextAC, ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts, PostType} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootState} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: Array<PostType>
    messagePost: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    changeNewText: (text: string) => void
}


export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppRootState):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messagePost: state.profilePage.messageForNewPost

    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeNewText: (text: string) => {
            dispatch(changeNewTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer



