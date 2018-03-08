import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';


const initialState = {count:0};

function reducer (state=initialState, action){
switch (action.type){
    case 'klik1':
    return {count: state.count + 1};
    case 'klik2':
    return {count: state.count - 1};
default:
    return state;
}
}

// function reducer(){
//     return {count:4};
// }


const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();