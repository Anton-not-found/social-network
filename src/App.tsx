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
import { RootStateType, state} from "./redux/state";
import {SidebarFriends} from "./components/SidebarFriends/SidebarFriends";

type AppPropsType = {
    state:RootStateType
    addPost:()=>void
    changeNewText:(newText: string)=>void

}

const App = (props:AppPropsType) => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <SidebarFriends/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile posts={state.profilePage.posts}
                                                                 messagePost={state.profilePage.messageForNewPost}
                                                                 addPost={props.addPost}
                                                                 changeNewText={props.changeNewText}

                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                                   messages={state.dialogsPage.messages}
                        />}/>
                        <Route path='/news' element={<News/>}/>
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
