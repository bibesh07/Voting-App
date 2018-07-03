import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Checkbox } from 'antd';
import { Button } from 'react-bootstrap';


const FormItem = Form.Item;

class RegisterForm extends Component {
    //constructor(props) {
    //    super(props);
    //   this.state = {};
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Proceed to next step");
            }
        });
    };

    handlePasswordChange = (e) => {

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
            <Form onSubmit={this.handleSubmit} className="register-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please enter your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please enter your Email!' }, {type: 'email', message: 'Enter a valid email!'}],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please enter your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('confirmpassword', {
                        rules: [{ required: true, message: 'Please enter Confirm Password!' }],
                    })(
                        <Input prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} type="Password" placeholder="Confirm Password" />
                    )}
                 </FormItem>
                    <FormItem>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please enter your Phone Number!' }, { type: 'number', message: 'Enter a valid phone!' }],
                        })(
                            <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone Number" />
                        )}
                    </FormItem>
                <FormItem>
                    <Button type="submit" className="register-form-button btn-lg pull-right">
                        Register
                    </Button>
                </FormItem>
            </Form>
            <hr />
            <h5>Login with</h5>
                <Button htmltype="submit" className="register-form-button btn-block pull-right facebook-btn loginWithFTG">
                    <Icon type="facebook" className="pull-left" />Facebook
                </Button>
                <Button htmltype="submit" className="register-form-button btn-block pull-right twitter-btn loginWithFTG">
                    <Icon type="twitter" className="pull-left"/>Twitter
                    </Button>
                <Button htmltype="submit" className="register-form-button btn-block pull-right google-btn loginWithFTG">
                    <Icon type="google" className="pull-left"/>Google+
            </Button>
            </div>
    );
}
}

export const Register = Form.create()(RegisterForm);
