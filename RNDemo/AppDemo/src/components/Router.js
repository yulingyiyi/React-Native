/*
 * @Author: tom 
 * @Date: 2018-04-27 20:00:45 
 * @Last Modified by: jerry
 * @Last Modified time: 2018-04-27 20:23:39
 */

 import React, {  Component }  from 'react';
 import { StackNavigator, TabNavigator } from "react-navigation";
 import IndexScreen from '../components/index';
 import FindScreen from '../components/find';
 import MeScreen from '../components/me';

 const IndexNav = StackNavigator({
      root: {
          screen : IndexScreen,
          navigationOptions:{
              title : 'index',
          }
      }
 });

 const FindNav = StackNavigator({
    root: {
        screen : FindScreen,
        navigationOptions:{
            title : 'find',
        }
    }
});

const MeNav = StackNavigator({
    root: {
        screen : MeScreen,
        navigationOptions:{
            title : 'me',
        }
    }
});


 const Tab = TabNavigator({
       index: {
           screen : IndexNav,
           navigationOptions:{
            tabBarLabel: 'index',
           }
       },
       find:{
           screen : FindNav,
           navigationOptions:{
            tabBarLabel: 'find',
           }
       },
       me: {
           screen: MeNav,
           navigationOptions:{
            tabBarLabel: 'me',
           }
       }
 });
 type Props = {};
export default class MainTabBar extends Component<Props> {
    render(){
        return (
            <Tab />
        );
    }
}