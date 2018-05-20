/*
 * @Author: tom 
 * @Date: 2018-04-27 20:00:45 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-20 18:57:51
 */

 import React, {  Component }  from 'react';
 import { StackNavigator, TabNavigator } from "react-navigation";
 import IndexScreen from '../pages/index';
 import FindScreen from '../pages/find';
 import MeScreen from '../pages/me';
 import  LendScreen from '../pages/lend';
 import  GoodsInfoScreen  from '../pages/goodsInfo';


 const IndexNav = StackNavigator({
      root: {
          screen : IndexScreen,
          navigationOptions:{
              title : 'index',
          }
      }
 },{
    headerMode : 'none',
 });

 const LendNav = StackNavigator({
    root: {
        screen : LendScreen,
        navigationOptions:{
            title : '全部产品',
        }
    },
    goodsInfo:{
        screen : GoodsInfoScreen,
        navigationOptions:{
            title : '产品信息',
        }
    }
});
const FindNav = StackNavigator({
    root: {
        screen : FindScreen,
        navigationOptions:{
            title : '发现',
        }
    }
});
const MeNav = StackNavigator({
    root: {
        screen : MeScreen,
        navigationOptions:{
            title : '我的',
        }
    }
});


 const Tab = TabNavigator({
       index: {
           screen : IndexNav,
           navigationOptions:{
            tabBarLabel: '',
           }
       },
       lend: {
            screen : LendNav,
            navigationOptions:{
            tabBarLabel: '出借',
            }
       },
       find:{
           screen : FindNav,
           navigationOptions:{
            tabBarLabel: '发现',
           }
       },
       me: {
           screen: MeNav,
           navigationOptions:{
            tabBarLabel: '我的',
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