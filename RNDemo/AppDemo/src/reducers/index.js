/*
 * @Author: yuling 
 * @Date: 2018-05-20 22:24:30 
 * @Last Modified by: yuling
 * @Last Modified time: 2018-05-20 22:27:48
 */
// import loginIn from '../reducers/counterReducer';
import {  combineReducers } from "redux";
import loginIn from '../reducers/loginReducer';

const rootReducer = combineReducers({
    loginIn : loginIn,
});
export default rootReducer;