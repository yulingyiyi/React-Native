/*
 * @Author: yuling 
 * @Date: 2018-05-20 22:28:04 
 * @Last Modified by: yuling
 * @Last Modified time: 2018-05-20 22:32:33
 */
import { createStore, applyMiddleware } from "redux";

import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleWare)(createStore);


export default function configureStore(initalState){
    const store = createStoreWithMiddleware(rootReducer,initalState);
    return store;
}
