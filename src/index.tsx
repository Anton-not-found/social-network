import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {ProfilePageType, PropfileTsarType} from "./redux/profile-reducer";
import {DialogsPageType, DialogsTsarType} from "./redux/dialogs-reducer";
import {Provider} from "react-redux";



export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}
export type RootActionType = PropfileTsarType | DialogsTsarType

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const rerenderEntireTree = (state: RootStateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
        let state = store.getState()
        rerenderEntireTree(state)
    }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
