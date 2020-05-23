import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';

//한번지정하면 바꿀수없는 상수 const
const msg="React\nRedux\nMongoDB\nNodeJs\nMobx"
ReactDOM.render(
  <React.StrictMode>
    {/*<App name={"황시내"} sex={"여자"} age={"29"}/>*/}
    {/*<App msg={msg}/>*/}
    <App2/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
