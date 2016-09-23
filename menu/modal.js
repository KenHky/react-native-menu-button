import { Dimensions } from 'react-native';
module.exports = (React, { View,TouchableOpacity,Modal }, { Styles }) => {
    const window = Dimensions.get('window');
    const MenuModal = React.createClass({
        render() {
            const landScapeStyle = this.props.landscape ? {
                width: window.height,
                height: window.width,
            } : {};
            return (
                <Modal animationType='none' visible={true} transparent={true} onRequestClose={() => {}}>
                    <TouchableOpacity style={[Styles.modal, landScapeStyle]} onPress={this.props.onPress}>
                        {this.props.children}
                    </TouchableOpacity>
                </Modal>
            )
        }
    })
    return MenuModal
}
