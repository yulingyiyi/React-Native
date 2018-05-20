/*
 * @Author: yuling 
 * @Date: 2018-05-20 22:33:23 
 * @Last Modified by: yuling
 * @Last Modified time: 2018-05-20 23:06:29
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/ConfigureStore.js";
import from './pages/login'
const store = configureStore();

export default class Root extends Component{

    render(){
        return ( 
            <Provider store={store}>
              
            </Provider>

        )
    }
}