/*
 * @Author: yuling 
 * @Date: 2018-05-21 13:40:33 
 * @Last Modified by: yuling
 * @Last Modified time: 2018-05-21 15:31:11
 */
import React,  { Component  } from "react";
import {
  Text,
  Platform,
  Dimensions,
  View,
  StyleSheet
} from 'react-native';

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
            (screenH === X_WIDTH && screenW === X_HEIGHT))
    )
}

export default  class HeaderPage extends Component 
{
    
    render(){
        return ( 
          <View style={styles.header}>
               <View style={styles.bottomView}>
                    <Text style={styles.back}>back</Text>
                    <View style={styles.titleView}> 
                        <Text style={styles.title}>title</Text>
                    </View>
                    {/* <Text style={styles.title}></Text> */}
               </View>
              
          </View>
        )
    }
}

const styles = StyleSheet.create({
   header :
   {
       height : isIphoneX ? 88 : 64,
       width: screenW,
       backgroundColor: '#FFFFFF',
       flexDirection : 'row',
       alignItems: 'flex-end'
   },
   bottomView:{
     height : 44,
     marginBottom: 0,
     width:'100%',
   },
   titleView : {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0,
        alignItems: 'center', 
        justifyContent: "center", 
   },
   title : {

    alignSelf:'center',
    color:'#f60',
   },
   back : {
    //    position:
    
   }
});