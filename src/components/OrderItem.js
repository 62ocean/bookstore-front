import React, {useEffect, useState} from "react";
import "../css/order.css"
import {getOrderItems} from "../services/orderService";
import {getCartBooks} from "../services/cartService";
import {List, Button, Drawer} from "antd";
import CartItem from "./CartItem";
import SummaryBar from "./SummaryBar";

export class OrderItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };

        this.showOrderBooks = this.showOrderBooks.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    showOrderBooks() {
        this.setState({
            visible: true,
        })
    }

    onClose() {
        this.setState({
            visible: false,
        })
    }

    render() {
        // console.log(this.state.items);
        const {info} = this.props;
        let showItems = [];
        for (let i = 0; i < info.orderItems.length; ++i) {
            showItems.push(<p>{info.orderItems[i].book.name}&emsp;
                ￥{info.orderItems[i].book.price.toFixed(2)}&emsp;
                ×{info.orderItems[i].num}</p>);
         }
        const time = new Date(info.time);
        // console.log(time);
        return (
            <div className="site-drawer-render-in-current-wrapper">
                <div className="one-order">
                    <h2>{time.getFullYear()}-{time.getMonth()+1}-{time.getDate()}&emsp;
                        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>
                    <p>￥{info.price.toFixed(2)}</p>
                    <p>收货地址：{info.address}</p>
                    <p>收货人：{info.receiver}</p>
                    <p>收货人联系方式：{info.tele}</p>
                </div>
                <div
                    style={{
                        marginTop: 10,
                    }}
                >
                    <Button type="primary" onClick={this.showOrderBooks}>
                        书籍详情
                    </Button>
                </div>
                <Drawer
                    title="订单书籍详情"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{
                        position: 'absolute',
                    }}
                >
                    <p>{showItems}</p>
                </Drawer>
            </div>



        );
    }
}


export default OrderItem;
