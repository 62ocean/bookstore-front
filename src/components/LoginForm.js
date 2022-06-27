import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "../css/login.css"
import {login} from "../services/userService";
import {history} from "../utils/history";

const LoginForm = () => {

    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        // console.log(JSON.stringify(values));
        login(values, callback);
    };

    const callback = (data) => {
        console.log(data);
        if (data == null) {
            message.info("用户名或密码不正确！");
        } else if (data.type === "user" && data.available === 0) {
            message.info("您的帐号已被禁用！");
        } else {
            message.info("登录成功！");
            localStorage.setItem("user", JSON.stringify(data));
            if (data.type === "user") {
                history.push("/home");
            } else {
                history.push("/book-manage");
            }
            history.go();
        }
    }

    return (
        <div id={"components-form-demo-normal-login"}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '不可为空' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '不可为空' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    或 <a href="">现在注册</a>
                </Form.Item>
            </Form>
        </div>

    );
};

export default LoginForm;
