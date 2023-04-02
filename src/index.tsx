import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/state";
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
       <App state={store.getState()} addPost={store.addPost.bind(store)} changeNewText={store.changeNewText.bind(store)}/>
      </BrowserRouter>
     </React.StrictMode>
 );
}

rerenderEntireTree();
store.subscriber(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
