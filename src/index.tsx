import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPost, changeNewText, RootStateType, state, subscriber} from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const rerenderEntireTree = () => {
 root.render(
     <React.StrictMode>
      <BrowserRouter>
       <App state={state} addPost={addPost} changeNewText={changeNewText}/>
      </BrowserRouter>
     </React.StrictMode>
 );
}

rerenderEntireTree();
subscriber(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
