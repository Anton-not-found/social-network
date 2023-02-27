import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {addPost, state} from "./redux/state";
import {SidebarFriends} from "./components/SidebarFriends/SidebarFriends";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <SidebarFriends/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile posts={state.profilePage.posts}
                                                                 addPost={addPost}/>}/>
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
        </BrowserRouter>
    );
}

export default App;
