/*
 * @Author: tom 
 * @Date: 2018-04-27 19:56:00 
 * @Last Modified by: jerry
 * @Last Modified time: 2018-04-28 18:27:12
 */
import React, { Component } from "react";

import {
    StyleSheet,
    View,
    Text,
    Button,
    NativeModules,
    
} from 'react-native';

const ModuleManager = NativeModules.ModuleManager;


export default class IndexScreen extends Component {
  
     static navigationOptions = {
          title: 'homeThree',
      };
     constructor(props){
       super(props);
       self.state = {

       };
     }
     componentDidMount(){

     }
  
    onButtonPress = ()=>{
        ModuleManager.addEventOne('周少停');
    };
    render(){
      return (
          <View style={styles.container}>
             <Button
            onPress={this.onButtonPress}
            title="This looks great!"
            accessibilityLabel="This sounds great!"
            />
              <Text>index</Text>
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
  