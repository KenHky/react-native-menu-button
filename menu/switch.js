module.exports = (React, { Component, View, TouchableOpacity }, { Styles }) => {
    class MenuSwitch extends Component {
        render() {
            return (
                <TouchableOpacity onPress={this.props.onPress}>
                    {this.props.content}
                </TouchableOpacity>
            )
        }
    }
    return MenuSwitch
}