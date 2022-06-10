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
            items: [],
            visible: false,
        };

        this.showOrderBooks = this.showOrderBooks.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {


        // const callback =  (data) => {
        //     // console.log(data);
        //     if (data != null) this.setState({items:data});
        // };
        //
        // const {info} = this.props;
        // // console.log(info);
        // getOrderItems(info.orderId, callback);

    }

    showOrderBooks() {
        const callback =  (data) => {
            console.log(data);
            this.setState({
                items: data,
                visible: true,
            });
        };

        const {info} = this.props;
        // console.log(info);
        getOrderItems(info.orderId, callback);
    }

    onClose() {
        this.setState({
            visible: false,
        })
    }

    render() {
        console.log(this.state.items);
        const {info} = this.props;
        let showItems = [];
        for (let i = 0; i < this.state.items.length; ++i) {
            showItems.push(<p>{this.state.items[i].name} ×{this.state.items[i].num}</p>);
         }
        return (
            <div className="site-drawer-render-in-current-wrapper">
                <div className="one-order">
                    <p>￥{info.price}</p>
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
                        详细信息
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
