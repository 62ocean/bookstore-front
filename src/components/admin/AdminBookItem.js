import React ,{useState, useEffect} from "react";
import {Button, Divider, Col, Row, Avatar, Form, Input, message} from "antd";
import {updateBook, deleteBook} from "../../services/bookService";

const { TextArea } = Input;


const AdminBookItem = (props) => {

    const {info} = props;
    const [modify, setModify] = useState(false);

    const onFinish = (values) => {

        const callback = (data) => {
            setModify(false);
            props.updateData();
        }
        values.id = info.id;
        values.available = 1;
        console.log(values);
        console.log('Success:', values);
        updateBook(values, callback);
    };

    const onDelete = () => {

        const callback = () => {
            message.info("删除成功");
            props.updateData();
        }

        deleteBook(info.id, callback);
    }

    return (

        <div>
            <Row>
                <Col span={3}><Avatar shape="square" size={100} src={info.image} /></Col>
                <Col span={20}>
                    {modify === false ?
                        <div>
                            <Row>
                                <Col span={5}><h4>{info.name}</h4></Col>
                                <Col span={3}><h4>{info.type}</h4></Col>
                                <Col span={4}><h4>{info.author}</h4></Col>
                                <Col span={2}><h4>￥{info.price}</h4></Col>
                                <Col span={2}><h4>库存：{info.inventory}</h4></Col>
                            </Row>
                            <p>{info.description}</p>
                            <Row justify="end">
                                <Col span={2}><Button onClick={()=>setModify(true)}>修改</Button></Col>
                                <Col span={2}><Button onClick={onDelete}>删除</Button></Col>
                            </Row>
                        </div>
                        :
                        <Form
                            onFinish={onFinish}
                            initialValues={{
                                name: info.name,
                                type: info.type,
                                author: info.author,
                                price: info.price,
                                inventory: info.inventory,
                                description: info.description,
                                image: info.image,
                            }}
                        >
                            <Row>
                                <Col span={5}>
                                    书名：<Form.Item name="name"><Input /></Form.Item>
                                </Col>
                                <Col span={3}>
                                    类型：<Form.Item name="type"><Input /></Form.Item>
                                </Col>
                                <Col span={4}>
                                    作者：<Form.Item name="author"><Input /></Form.Item>
                                </Col>
                                <Col span={2}>
                                    ￥<Form.Item name="price"><Input /></Form.Item>
                                </Col>
                                <Col span={2}>
                                    库存：<Form.Item name="inventory"><Input /></Form.Item>
                                </Col>
                            </Row>
                            描述：
                            <Form.Item name="description"><TextArea  autoSize={{ minRows: 2, maxRows: 6 }}/></Form.Item>
                            封面URL：
                            <Form.Item name="image"><Input /></Form.Item>
                            {/*<p>{info.description}</p>*/}
                            <Row justify="end">
                                <Col span={2}><Button type="primary" htmlType="submit">确定</Button></Col>
                                <Col span={2}><Button onClick={()=>{setModify(false)}}>取消</Button></Col>
                            </Row>
                        </Form>
                    }

                </Col>

            </Row>
            <Divider />
        </div>

    );
}

export default AdminBookItem;
