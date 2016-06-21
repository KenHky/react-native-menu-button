
module.exports = (React, { View, }, { Styles }) => {
    const MenuOptions = React.createClass({
        render() {
            return (
                <View style={[Styles.options, this.props.style]}>
                    { this.props.children }
                </View>
            )
        }
    })
    return MenuOptions
}