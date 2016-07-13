#react-native-menu-button
dropdown menu button for react native

###简介

这是一个react-native的menubutton组件，样式参考了[react-native-menu](https://github.com/jaysoo/react-native-menu)，由于此组件有无限循环setState的bug，以及不方便点击menu外部关闭menu，所以自己实现了一个。

支持iOS和android,但是安卓的样式和iOS的有一些差异。

| iOS | Android |
| --- | ------- |
| ![](./pic/menubutton-ios.gif) | ![](./pic/menubutton-android.gif) |

### API
api很简单，
buttonStyle：按钮的样式，可覆盖默认样式。

optionsStyle：menu组的样式，可覆盖默认的样式。

menuGroup：menu数据，格式为[{key:num or str,value:num or str,text:str,hide:Boolean}]。value为点击发生后传的值，text为显示的字符串，hide为true时隐藏该条数据，默认为false。

onSelect：选择一个选项后的回调，参数为menu数据的value值。

button：可定制按钮，默认为{(<Text style={{ fontSize: 20,textAlign:"right" }}>&#8942;</Text>)} (0.1.0新增)。

### demo

    cd demo
    npm install
    react-native run-android

### 安装
    npm install react-native-menu-button ——save
    
###使用

    import React, { Component } from 'react';
    import {
      AppRegistry,
      StyleSheet,
      Text,
      View
    } from 'react-native';
    
    import MenuButton from 'react-native-menu-button'
    
    class AwesomeProject extends Component {
      constructor(props) {
        super(props);
        this.state = {
          selectData:""
        };
      }
      _handleOnSelect (value) {
        this.setState({selectData:value})
      }
    
      render() {
        menuGroup= [{key:"0",value:"menu1",text:"menu1"},{key:"1",value:"menu2",text:"menu2"},{key:"2",value:"菜单3",text:"菜单3"},{key:"3",value:"菜单4",text:"菜单4"}]
    
        return (
          <View>
            <View style={styles.top}>
              <MenuButton  buttonStyle={[styles.rightButton]} menuGroup={menuGroup}
                onSelect={this._handleOnSelect.bind(this)}/>
            </View>
            <Text style={styles.text}>{`select ${this.state.selectData}`}</Text>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      top:{
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        top: 0,
        height: 64,
        right: 0,
        left: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#828287',
        position: 'relative',
      },
      text:{
        marginTop:20,
      },
      rightButton: {
        width: 100,
        height: 37,
        position: 'absolute',
        bottom: 8,
        right: 2,
        padding: 8
      },
    });
    
    AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
    
###已知问题

在 [react-native-navbar](react-native-fellowship/react-native-navbar)中位置计算不正确。

###协议
MIT


