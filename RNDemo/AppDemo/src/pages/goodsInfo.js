/*
 * @Author: tom 
 * @Date: 2018-04-28 16:21:13 
 * @Last Modified by: jerry
 * @Last Modified time: 2018-04-28 18:27:39
 */
import React , { Component } from 'react';

import { 
    View, 
    Text,
    StyleSheet
  } from "react-native";

  export default class GoodsInfoScreen extends Component{
      render(){
          return (
              <Text style={ styles.container }>
                  GoodsInfoScreen
              </Text>
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
  