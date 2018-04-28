/*
 * @Author: tom 
 * @Date: 2018-04-28 14:07:21 
 * @Last Modified by: jerry
 * @Last Modified time: 2018-04-28 14:25:15
 */

let account = null;
export default class AccountInfo {
    constructor(props){
      if(!account){
         account = this;
      }
      return account;
    }
    static ShareInstance(){
        let singleton = new AccountInfo();
        return singleton;
    } 
} 
 
