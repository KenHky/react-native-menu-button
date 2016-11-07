module.exports = (React, { Component, View, TouchableOpacity, Modal }, { Styles }) => {
    class MenuModal extends Component {
        render() {
            const { visible, onPress, children } = this.props
            const { width, height } = this.props.window
            return (
                <Modal
                    style={{
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    }}
                    visible={visible}
                >
                    <TouchableOpacity 
                        style={{
                            width,
                            height,
                        }} 
                        onPress={onPress}
                    >
                        {children}
                    </TouchableOpacity>
                </Modal>
            )
        }
    }
    return MenuModal
}
