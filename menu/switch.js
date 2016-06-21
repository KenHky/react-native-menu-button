
module.exports = (React, { View,TouchableOpacity }, { Styles }) => {
    const MenuSwitch = React.createClass({
        render() {
            return (
                <TouchableOpacity onPress={this.props.onPress}>
                    {this.props.content}
                </TouchableOpacity>
            )
        }
    })
    return MenuSwitch
}