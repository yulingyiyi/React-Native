/*
 * @Author: tom 
 * @Date: 2018-04-28 14:30:49 
 * @Last Modified by: yuling
 * @Last Modified time: 2018-04-29 19:05:15
 */
import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    TouchableHighlight,
    ProgressViewIOS,
    Alert
} from 'react-native';

import GoodsInfoScreen from "../components/goodsInfo";

export default class LendScreen extends Component {
  
     static navigationOptions = {
          title: 'homeThree',
      };
      sourceData = [];
     constructor(props){
       super(props);
       this.state = {
        sourceData : []
       };
     }
     componentDidMount(){

          // 初始化数据
          for (let i = 0; i < 5; i ++) {
            let obj = {
                
                    "defaultIncome": "153",
                    "atleastMoney": 10000,
                    "baseEarnings": 5.6,
                    "JiangLiEarnings": 0,
                    "qxType": "99",
                    "title1": "随存随取",
                    "title2": "百元起投",
                    "title3": "提现无手续费",
                    "title": "日日盈"
            };
            this.sourceData.push(obj);
        }
        this.setState({
            sourceData: this.sourceData
        });
        
     }
    
     _onPressItem =()=>{
      

        console.log(item);

     }
    _toGoodsInfoScreen = (item)=> {
          
        
          console.log(item);
          const { navigate } = this.props.navigation;
          navigate('goodsInfo');        
    };
      // 上拉加载更多
    _onEndReached = () => {
        let newData = [];

        for (let i = 20; i < 30; i ++) {
            let obj = {
                "defaultIncome": "153",
                "atleastMoney": 10000,
                "baseEarnings": 5.6,
                "JiangLiEarnings": 0,
                "qxType": "99",
                "title1": "随存随取",
                "title2": "百元起投",
                "title3": "提现无手续费",
                "title": "日日盈"
            };

            newData.push(obj);
        }

        this.sourceData = this.sourceData.concat(newData);
        this.setState({
            sourceData:  this.sourceData
        });
    };
     _renderItem = ({item}) =>{
            return (
                <View style= {styles.flatList_item} >
                    <View style={ { flexDirection : 'row',height:20 } }>  
                        <Text> { item.title } </Text>
                        <Text> { item.atleastMoney } </Text>
                    </View>
                    <View style={ { flexDirection : 'row',height:50,justifyContent : 'space-between' } }>  
                        <View>
                            <Text style={{ fontSize: 20 }}> { item.baseEarnings }% </Text>
                            <Text> 预期年化收益率 </Text>
                        </View>
                        <TouchableHighlight onPress={
                                              this._toGoodsInfoScreen
                                        //  ()=> {
                                        //       Alert.alert(
                                        //             '你点击了按钮',
                                        //            'Hello World！',
                                        //           [
                                        //              {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
                                        //               {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                        //              {text: '确定', onPress: () => console.log('OK Pressed')},
                                        //           ]
                                        //         )
                                        //       }
                        } style={styles.button}>
                            <View style={{ alignItems: 'center' }}>
                            <Text>立即转入</Text>
                         </View>
                        </TouchableHighlight>
                    </View>
                    <View style={ { flexDirection : 'row',height:50, justifyContent : 'space-between', alignContent: 'center'} }>  
                        <View>
                          <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={0.2}/>

                        </View>
                        <Text> 剩余可投 { item.atleastMoney } 元 </Text>
                    </View>

                </View>  
            );
    }
   _renderItemSeparatorComponent = ()=> {
       return (
           <View style={{ backgroundColor : '#f5f5f5',height: 10 }}>

           </View>
       );
   }
    _keyExtractor = (item, index) => index;

    render(){

      return (
          <View style={styles.container}>
             <FlatList
                ref={ ref => this.flatList = ref }
                data={ this.state.sourceData }
                // extraData={ this.state.selected }
                keyExtractor={ this._keyExtractor }
                renderItem={ this._renderItem }
                // // 决定当距离内容最底部还有多远时触发onEndReached回调；数值范围0~1，例如：0.5表示可见布局的最底端距离content最底端等于可见布局一半高度的时候调用该回调
                onEndReachedThreshold={0.1}
                // // 当列表被滚动到距离内容最底部不足onEndReacchedThreshold设置的距离时调用
                onEndReached={ this._onEndReached }
                // ListHeaderComponent={ this._renderHeader }
                // ListFooterComponent={ this._renderFooter }
                ItemSeparatorComponent={ this._renderItemSeparatorComponent }
                // ListEmptyComponent={ this._renderEmptyView }
                // refreshing={ this.state.refreshing }
                // onRefresh={ this._renderRefresh }
                // 是一个可选的优化，用于避免动态测量内容；+50是加上Header的高度
                // getItemLayout={(data, index) => ( { length: 40, offset: (40 + 1) * index + 50, index } )}
             

             />
           
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    flatList_item: {
      backgroundColor: '#FFFFFF',
      height : 120,
      paddingTop:10,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10
    },
    progressView : {
        width : 200,
    },
    button: {
        padding: 5,
        width: 100,
        height : 25,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor : '#f00000',
        // textAlign:'center',     
        // justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效  
    }
  });
  