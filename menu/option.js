module.exports = (React, { View,TouchableOpacity }, { Styles }) => {
    const MenuOption = React.createClass({
        render() {
            return (
                <TouchableOpacity style={[Styles.option, this.props.style]} onPress={this.props.onPress}>
                    { this.props.children }
                </TouchableOpacity>
            )
        }
    })
    return MenuOption
}