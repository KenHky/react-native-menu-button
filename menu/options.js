module.exports = (React, { Component, View }, { Styles }) => {
    class MenuOptions extends Component {
        render() {
            return (
                <View style={[Styles.options, this.props.style]}>
                    { this.props.children }
                </View>
            )
        }
    }
    return MenuOptions
}