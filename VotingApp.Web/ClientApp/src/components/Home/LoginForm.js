import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Checkbox, message } from 'antd';
import { Button } from 'react-bootstrap';
import { userInfo } from 'os';
import axios from 'axios';

const FormItem = Form.Item;


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: false,
            passwordView: false,
            loading: false,
        };
    }

    success = () => {
        message.success('Email Verified');
    };

    emailHandleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        this.success();

        const user = {
            email: this.state.email,
            rememberMe: false,
        }

        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.get(`/api/users/VerifyEmail`, {user})
                    .then(res => {
                        const persons = res.data;
                        console.log(persons);
                    })
                this.setState({ email: values.email, passwordView: true });
            }
        });
    };

    passwordHandleSubmit = (e) => {
        e.preventDefault();
    }

    goBack = (e) => {
        this.setState({ passwordView: false, loading: false });
    }

    verifyingLoader = () => {
        return (
            <span>
               Verifying <Icon type="loading" />
            </span>
        );
    }

    loginButtonText = () => {
        return (
            <span>
                Login <Icon type="login" />
            </span>
         );
    }

    emailForm = (formProps) => {
        const { getFieldDecorator } = formProps;
        let LoginBtn = (this.state.loading) ? this.verifyingLoader() : this.loginButtonText();
        return (
            <Form onSubmit={this.emailHandleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your Email!' }, { type: 'email', message: 'Enter valid Email!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'false',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <Button id="emailSubmitBtn" type="submit" className="btn-block btn blogin-form-button">
                        {LoginBtn}
                    </Button>
                </FormItem>
            </Form >
        );
    }

    passwordForm = (formProps) => {
        const { getFieldDecorator } = formProps;
        return (
            <Form onSubmit={this.passwordHandleSubmit} className="login-form">
                <Button onClick={this.goBack} type="button" className="btn-sm btn-info btn btn-default pull-right">
                    <Icon type="arrow-left" /> Go Back
                </Button>
                <h5> Welcome, {this.state.email} </h5>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="submit" className="btn-block blogin-form-button">
                        Login
                    </Button>
                </FormItem>
            </Form >
        );
    }

    render() {
        let content = (!this.state.passwordView) ? this.emailForm(this.props.form) : this.passwordForm(this.props.form);
        return (
            <div>
                {content}
            </div>
        );
    }
}

export const Login = Form.create()(LoginForm);
