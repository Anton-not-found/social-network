import React from 'react';
import './App.css';

import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Sidebar} from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



type AppPropsType = {}

const App: React.FC<AppPropsType> = () => {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'profile/:userId?/*'} element={<ProfileContainer/>}/>
                    <Route path='/dialogs/' element={<DialogsContainer/>}/>
                    <Route path='/news/' element={<News/>}/>
                    <Route path='/music/' element={<Music/>}/>
                    <Route path='/users/' element={<UsersContainer/>}/>
                    <Route path='/settings/' element={<Settings/>}/>
                </Routes>
            </div>

            <div className='sidebarFriends'>

            </div>
        </div>

    );
}

export default App;
