import React from 'react';
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import axios from "axios";
import {AppRootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";


type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


function ProfileContainer(props:ProfilePropsType) {
    const {userId} = useParams();
    let currUserId = userId || 28505  // потом подставить мой userID

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId)
            .then((response) => {
                props.setUserProfile(response.data);
            });

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

const mapStateToProps = (state:AppRootState):MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })
(ProfileContainer);
