/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-05-20 18:42:48 
 * @Last Modified by: yuling
 * @Last Modified time: 2018-05-21 16:09:40
 * 22:13:15
 */
import {
    Alert
} from 'react-native';
import * as types from '../constants/loginTypes';

let user = {
    name : 'zhangsan',
    age : 24
};
export function login(){
    console.log("登陆方法");
    Alert.alert('标题内容','正文内容',[{text:"我知道了"}]);
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