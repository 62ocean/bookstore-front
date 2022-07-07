import React ,{useState, useEffect} from "react";
import {Button, Divider, Col, Row} from "antd";

const AdminOrderItem = (props) => {

    const {info} = props;

    let items = [];
    for (let i = 0; i < info.orderItems.length; ++i) {
        items.push(<p>【{info.orderItems[i].book.name} ×{info.orderItems[i].num}】</p>);
    }

    const time = new Date(info.time);
    // console.log(time);

    return (

        <div>
            <h2>{time.getFullYear()}-{time.getMonth()+1}-{time.getDate()}&emsp;
                {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>
            <Row>
                <Col span={4}><h4>用户名：{info.user.username}</h4></Col>
                <Col span={4}><h4>订单总价：{info.price.toFixed(2)}</h4></Col>
                <Col span={4}><h4>收货地址：{info.address}</h4></Col>
                <Col span={4}><h4>收货人：{info.receiver}</h4></Col>
                <Col span={4}><h4>收货人联系方式：{info.tele}</h4></Col>
            </Row>
            <Row>{items}</Row>

            <Divider />
        </div>

    );
}

export default AdminOrderItem;
