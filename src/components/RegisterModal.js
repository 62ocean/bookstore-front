import React ,{useState, useEffect} from "react";
import {Button, Col, Form, Input, message, Modal, Row} from "antd";
import {register} from "../services/userService";

const RegisterModal = ({isVisible, setInvisible}) => {

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {

        const callback = (data) => {
            console.log(data);
            if (data === 1) {
                message.info("注册成功！");
                setInvisible();
            } else {
                message.info("用户名已存在，请重新输入！");
            }
        }

        console.log('Received values of form: ', values);
        register(values, callback);
    };

    if (isVisible === true) {
        form.resetFields();
    }

    return (
        <>
            <Modal title="新用户注册" visible={isVisible} footer={null}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        label="用户名"
                        rules={[{
                                required: true,
                                message: '请输入用户名！',
                            }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (value.length >= 6) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('密码长度需大于6位！'));
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请再输入一遍您的密码！',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('两次输入的密码不同！'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[
                            {
                                type: 'email',
                                message: '邮箱格式不正确！',
                            },
                            {
                                required: true,
                                message: '请输入邮箱！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Row justify="end">
                        <Col span={5}><Button type="primary" htmlType="submit">确定</Button></Col>
                        <Col span={5}><Button onClick={setInvisible}>取消</Button></Col>
                    </Row>
                </Form>

            </Modal>
        </>
    );

}
export default RegisterModal;
