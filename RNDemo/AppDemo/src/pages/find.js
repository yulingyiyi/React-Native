/*
 * @Author: tom 
 * @Date: 2018-04-27 20:00:25 
 * @Last Modified by: jerry
 * @Last Modified time: 2018-04-28 19:23:10
 */
import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class FindScreen extends Component {
    render(){
      return (
          <View style={styles.container}>
              <Text>find</Text>
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
  

  