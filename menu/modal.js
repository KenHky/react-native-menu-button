module.exports = (React, { View,TouchableOpacity,Modal }, { Styles }) => {
    const MenuModal = React.createClass({
        render() {
            return (
                <Modal animationType='none' visible={true} transparent={true}>
                    <TouchableOpacity style={[Styles.modal]} onPress={this.props.onPress}>
                        {this.props.children}
                    </TouchableOpacity>
                </Modal>
            )
        }
    })
    return MenuModal
}
