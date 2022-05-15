import React, {useEffect, useState} from "react";
import "../css/order.css"
import {getOrderItems} from "../services/orderService";
import {getCartBooks} from "../services/cartService";
import {List} from "antd";
import CartItem from "./CartItem";
import SummaryBar from "./SummaryBar";

export class OrderItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {

        const callback =  (data) => {
            // console.log(data);
            if (data != null) this.setState({items:data});
        };

        const {info} = this.props;
        // console.log(info);
        getOrderItems(info.orderId, callback);

    }

    render() {
        console.log(this.state.items);
        const {info} = this.props;
        let showItems = [];
        for (let i = 0; i < this.state.items.length; ++i) {
            showItems.push(<h3>{this.state.items[i].name} ×{this.state.items[i].num}</h3>);
         }
        return (
            <div className="one-order">
                <p>{showItems}</p>
                <p>￥{info.price}</p>
                <p>收货地址：{info.address}</p>
                <p>收货人：{info.receiver}</p>
                <p>收货人联系方式：{info.tele}</p>
            </div>

        );
    }
}


export default OrderItem;
