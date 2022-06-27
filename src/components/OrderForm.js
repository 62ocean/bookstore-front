import React  from "react";
import { Form, Input, Button, Checkbox, Radio, message } from 'antd';
import "../css/order.css"
import {submitOrder} from "../services/orderService";
import {history} from "../utils/history";

const OrderForm = (props) => {

    const user = JSON.parse(localStorage.getItem("user"));

    const onFinish = (values) => {
        // console.log('Success:', values);

        values.user_id = user.userId;
        values.price = props.price;
        // console.log(values);
        submitOrder(values,callback);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const callback = (data) => {
        message.info("下订单成功！");
        history.push("/my-order");
        history.go();
    }

    return (
        <div className="order-form">
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="收货地址"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="收货人"
                    name="receiver"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="收货人联系方式"
                    name="tele"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your telephone number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="是否开具发票"
                    name="invoice"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        确认支付
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default OrderForm;
