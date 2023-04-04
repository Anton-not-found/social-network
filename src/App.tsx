import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {RootActionType, RootStateType} from "./index";

type AppPropsType = {
    state:RootStateType
    dispatch:(action:RootActionType)=>void
}

const App: React.FC<AppPropsType> = (props) => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile posts={props.state.profilePage.posts}
                                                                 messagePost={props.state.profilePage.messageForNewPost}
                                                                 dispatch={props.dispatch}
                        />}/>
                        <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                   messages={props.state.dialogsPage.messages}
                                                                   newMessageBody={props.state.dialogsPage.newMessageBody}
                                                                   dispatch={props.dispatch}
                        />}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>

                <div className='sidebarFriends'>

                </div>
            </div>

    );
}

export default App;
