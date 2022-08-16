import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Redux from "./redux/Redux";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <Redux />
     </Provider>
  </React.StrictMode>,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
