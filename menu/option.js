module.exports = (React, { Component, View, TouchableOpacity }, { Styles }) => {
    class MenuOption extends Component {
        render() {
            const { style, onPress, children } = this.props
            return (
                <TouchableOpacity 
                    style={[Styles.option, style]} 
                    onPress={onPress}
                >
                    { children }
                </TouchableOpacity>
            )
        }
    }
    return MenuOption
}