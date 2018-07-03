import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Login } from './LoginForm';

const LoginBtn = {
    'marginTop': '5px',
    'marginRight': '8px',
}
export class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = { visible:false};
    }

    showModal = () => {
        this.setState({ visible: true, });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible } = this.state;
        return (
            <div>
                <Button style={LoginBtn} size={"large"} onClick={this.showModal}> Login </Button>
                <Modal
                    visible={visible}
                    onCancel={this.handleCancel}
                    title= "Login"
                    footer={[null]}
                >
                    <Login />
                </Modal>
            </div>
        );
    }
}