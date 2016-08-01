const React = require('react')
const {
    PropTypes,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Modal,
    Dimensions,
    TouchableWithoutFeedback,
    Platform,
} = require('react-native')
let nextID = 1;



const Components = {PropTypes,TouchableOpacity,Text,View,StyleSheet,Modal,Dimensions,TouchableWithoutFeedback}

const Styles = require('./menu/style')(React,Components);

const {
  MenuSwitch,
  MenuOptions,
  MenuModal,
  MenuOption,
} = require('./menu')(React,Components,Styles)


const MenuButton = React.createClass({
    getInitialState() {
        return {
            openMenu:'',
            menuName:this.makeName (),
            layout:{width:0,height:0,x:0,y:0},
            selectMenu:''
        }
    },
    openMenu (menuName) {
        this.setState({openMenu:menuName})
    },
    closeMenu () {
        this.setState({openMenu:''})
    },
    toggleMenu () {
        if (this.state.openMenu==this.state.menuName) {
            this.closeMenu();
        } else {
            this.openMenu(this.state.menuName);
        }
        console.log('openMenu.....',this.state.openMenu)
    },
    makeName () {
        return `menu-${nextID++}`;
    },
    onPress (value) {
        this.closeMenu()
        this.setState({selectMenu:value})
        this.props.onSelect(value)
    },
    onLayout (e) {
        this.setState({layout:e.nativeEvent.layout})
        console.log("layout::::::",e.nativeEvent.layout)
    },
    render () {
        const {openMenu,menuName,layout,selectMenu} = this.state
        const {buttonStyle,menuGroup,optionsStyle,button,optionStyle,optionSelectedStyle} = this.props
        const window = Dimensions.get('window')
        const optionsStyles = Platform.OS === 'android'?{top:layout.y,right:(window.width-layout.x-layout.width), ...optionsStyle}:{top:layout.y,right:(window.width-layout.x-layout.width), ...optionsStyle}
        const buttonContent = button?button:(<Text style={{ fontSize: 20,textAlign:"right" }}>&#8942;</Text>)
        return (
            <View style={buttonStyle} onLayout={this.onLayout}>
                <MenuSwitch content={buttonContent} onPress={this.toggleMenu}></MenuSwitch>
                {
                    openMenu==menuName?(
                        <MenuModal onPress={this.closeMenu}>
                                <MenuOptions style={optionsStyles}>
                                    {
                                        menuGroup.map((menu)=> {
                                            if (!menu.hide) {
                                                let selectStyle = ''
                                                if (selectMenu==menu.value&&optionSelectedStyle) {
                                                    selectStyle = optionSelectedStyle
                                                }
                                                return (
                                                    <MenuOption key={menu.key} onPress={this.onPress.bind(null,menu.value)}  style={[optionStyle,selectStyle]}>
                                                        <Text>{menu.text}</Text>
                                                    </MenuOption>
                                                )
                                            }
                                        })
                                    }
                                </MenuOptions>
                        </MenuModal>
                    ):null
                }
            </View>

        )
    }
})
export default MenuButton