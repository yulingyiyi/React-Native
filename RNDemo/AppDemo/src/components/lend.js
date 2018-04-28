/*
 * @Author: tom 
 * @Date: 2018-04-28 14:30:49 
 * @Last Modified by: jerry
 * @Last Modified time: 2018-04-28 16:17:58
 */
import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList
} from 'react-native';

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
                    <View>  
                        <Text> { item.title } </Text>
                        <Text> { item.atleastMoney } </Text>
                    </View>
                     
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
                // ItemSeparatorComponent={ this._renderItemSeparatorComponent }
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
      textAlign: 'center',
      backgroundColor: '#FFFFFF',
      height : 100,
      marginBottom: 10,
    },
  });
  