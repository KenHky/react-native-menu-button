import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native'
import Modal from 'react-native-root-modal'

let nextID = 1
const Components = {
  Component,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
}
const Styles = require('./menu/style')(React,Components);
const {
  MenuSwitch,
  MenuOptions,
  MenuModal,
  MenuOption,
} = require('./menu')(React,Components,Styles)

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu:'',
      menuName:this.makeName (),
      layout:{width:0,height:0,x:0,y:0},
      selectMenu:''
    };
  }
  openMenu = (menuName) => {
    this.setState({openMenu:menuName})
  }
  closeMenu = () => {
    this.setState({openMenu:''})
  }
  toggleMenu = () => {
    if (this.state.openMenu==this.state.menuName) {
      this.closeMenu();
    } else {
      this.openMenu(this.state.menuName);
    }
  }
  makeName () {
    return `menu-${nextID++}`;
  }
  onPress = (value) => {
    this.closeMenu()
    this.setState({selectMenu:value})
    this.props.onSelect(value)
  }
  onLayout = (e) => {
    this.setState({layout:e.nativeEvent.layout})
  }
  render () {
    const {
      openMenu,
      menuName,
      layout,
      selectMenu,
    } = this.state
    const {
      buttonStyle,
      menuGroup,
      optionsStyle,
      button,
      optionStyle,
      selectedOptionStyle,
      optionTextStyle,
      selectedOptionTextStyle,
    } = this.props
    const window = Dimensions.get('window')
    const optionsStyles = {
      top:layout.y,
      right:(window.width-layout.x-layout.width), 
      ...optionsStyle,
    }
    const buttonContent = button?button:(<Text style={{ fontSize: 20,textAlign:"right" }}>&#8942;</Text>)
    return (
      <View style={buttonStyle} onLayout={this.onLayout}>
      <MenuSwitch content={buttonContent} onPress={this.toggleMenu} />
        <MenuModal onPress={this.closeMenu} window={window} visible={openMenu==menuName}>
          <MenuOptions style={optionsStyles}>
            {
              menuGroup.map((menu)=> {
                if (!menu.hide) {
                  let selectStyle = ''
                  let selectTextStyle = ''
                  if (selectMenu==menu.value) {
                    if (selectedOptionStyle) {
                      selectStyle = selectedOptionStyle
                    }
                    if (selectedOptionTextStyle) {
                      selectTextStyle = selectedOptionTextStyle
                    }
                  }
                  return (
                    <MenuOption key={menu.key} onPress={this.onPress.bind(null,menu.value)}  style={[optionStyle,selectStyle]}>
                      <Text style={[optionTextStyle,selectTextStyle]}>{menu.text}</Text>
                    </MenuOption>
                  )
                }
              })
            }
          </MenuOptions>
        </MenuModal>
      </View>

    )
  }
}