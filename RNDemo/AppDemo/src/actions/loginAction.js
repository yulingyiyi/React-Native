/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-05-20 18:42:48 
 * @Last Modified by: yuling
 * @Last Modified time: 2018-05-20 22:13:15
 */
import * as types from '../constants/counterTypes';

let user = {
    name : 'zhangsan',
    age : 24
};

export function login(){
    console.log("登陆方法");
    return dispatch => {
        dispatch(isLogining());//正在执行登陆
        
    }
}
function isLogining(){
    return {
        type: types.LOGIN_IN_DOING
    }
}
function loginSuccess(isSuccess, user) {

    console.log('success');
    
    return {
    
    type: types.LOGIN_IN_DONE,
    
    user: user,
    
    }
}

function loginError(isSuccess) {

    console.log('error');
    
    return {
    
    type: types.LOGIN_IN_ERROR,
    
    }
}