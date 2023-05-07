import React from 'react';
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import axios from "axios";
import {settings} from "../Users/UsersContainer";
import {connect} from "react-redux";
import {ProfilePageType, ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";


type MapStateToPropsType = ProfilePageType

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`, settings)
            .then(res => {
                this.props.setUserProfile(res.data)
            });
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props} />
            </div>
        );
    }
}


const mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    messageForNewPost: state.profilePage.messageForNewPost
})
export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
})
(ProfileContainer);