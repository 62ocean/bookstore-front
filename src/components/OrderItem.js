import React from "react";
import "../css/order.css"

const OrderItem = (props) => {

    const info = props.info;

    return (
        <div className="one-order">
            <h3>2022.3.21 23:48</h3>
            <p>{info.price}</p>
            <p>{info.name}</p>
            <p>收货地址：上海交通大学闵行校区（东川路800号）</p>
            <p>收货人：张三</p>
            <p>收货人联系方式：12345678901</p>
        </div>
    );

}

export default OrderItem;
