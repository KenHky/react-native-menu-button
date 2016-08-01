

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MenuButton from 'react-native-menu-button'

class AwesomeProject extends Component {
  componentDidMount() {

  }
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
            onSelect={this._handleOnSelect.bind(this)} optionSelectedStyle={{backgroundColor:"red"}}/>
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
