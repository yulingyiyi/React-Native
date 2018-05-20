/*
 * @Author: tom 
 * @Date: 2018-04-27 19:59:05 
 * @Last Modified by: jerry
 * @Last Modified time: 2018-04-28 14:24:59
 */
import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import AccountInfo from '../util/account';


const  accountInfo = AccountInfo.ShareInstance();
       accountInfo.name = "accountInfo";

export default class MeScreen extends Component {
    render(){
      return (
          <View style={styles.container}>
              <Text>me{ accountInfo.name }</Text>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  