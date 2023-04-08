import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Sidebar} from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {store} from "./redux/redux-store";


type AppPropsType = {

}

const App: React.FC<AppPropsType> = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/dialogs' element={<DialogsContainer />}/>
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
