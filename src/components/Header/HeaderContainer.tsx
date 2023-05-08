import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {settings} from "../Users/UsersContainer";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {setAuthUserDataAC, UserAuthType} from "../../redux/auth-reducer";


type MapStateToPropsType = {
    auth: UserAuthType
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

function HeaderContainer(props: ProfilePropsType) {


    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, settings)
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    props.setAuthUserData(id, login, email)
                }
            })
    }, [])

    return <Header auth={props.auth}/>

};
const mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    auth: state.auth
});
export default connect(mapStateToProps, {setAuthUserData: setAuthUserDataAC})(HeaderContainer)

