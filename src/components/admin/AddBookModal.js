import React ,{useState, useEffect} from "react";
import {Button, Col, Form, Input, Modal, Row, message} from "antd";
import {updateBook} from "../../services/bookService";

const { TextArea } = Input;

const AddBookModal = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {

        const callback = (data) => {
            setIsModalVisible(false);
            message.info("添加成功");
            props.updateData();
        }
        // console.log(values);
        values.available = 1;
        updateBook(values, callback);

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                添加书籍
            </Button>
            <Modal title="书籍信息" visible={isModalVisible} footer={null}>
                <Form onFinish={handleOk}>
                    <Row justify="space-between">
                        <Col span={5}>
                            书名：<Form.Item name="name"><Input /></Form.Item>
                        </Col>
                        <Col span={3}>
                            类型：<Form.Item name="type"><Input /></Form.Item>
                        </Col>
                        <Col span={4}>
                            作者：<Form.Item name="author"><Input /></Form.Item>
                        </Col>
                        <Col span={3}>
                            ￥<Form.Item name="price"><Input /></Form.Item>
                        </Col>
                        <Col span={3}>
                            库存：<Form.Item name="inventory"><Input /></Form.Item>
                        </Col>
                    </Row>
                    描述：
                    <Form.Item name="description"><TextArea  autoSize={{ minRows: 2, maxRows: 6 }}/></Form.Item>
                    封面URL：
                    <Form.Item name="image"><Input /></Form.Item>
                    {/*<p>{info.description}</p>*/}
                    <Row justify="end">
                        <Col span={5}><Button type="primary" htmlType="submit">确定</Button></Col>
                        <Col span={5}><Button onClick={handleCancel}>取消</Button></Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
}

export default AddBookModal;
