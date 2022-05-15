import React from "react";
import {List} from "antd";
import OrderItem from "./OrderItem";
import {getOrders} from "../services/orderService";
import "../css/order.css"

// const BOOKS = [
//     {name:'深入理解计算机系统', price:'￥100', image:"images/bk/CSAPP.jpg"},
//     {name:'三体（全三册）', price:'￥20', image:"images/bk/三体.jpg"},
//     {name:'小王子', price:'￥40', image:'images/bk/小王子.jpg'},
//     {name:'悲惨世界（上中下）', price:'￥80', image:'images/bk/悲惨世界.jpg'},
//     {name:'探索月球', price:'￥133.2', image:'images/bk/探索月球.jpg'},
//     {name:'追风筝的人', price:'￥35.3', image:'images/bk/追风筝的人.jpg'},
//     {name:'魔力的胎动', price:'￥35.9', image:'images/bk/魔力的胎动.jpg'},
//     {name:'追风筝的人2', price:'￥35.3', image:'images/bk/追风筝的人.jpg'},
//     {name:'追风筝的人3', price:'￥35.3', image:'images/bk/追风筝的人.jpg'},
//     {name:'追风筝的人4', price:'￥35.3', image:'images/bk/追风筝的人.jpg'},
// ];

export class OrderList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {orders: []};
    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({orders:data});
        };

        const user = JSON.parse(localStorage.getItem("user"));
        getOrders(user.userId, callback);
    }

    render() {
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <section id="order">
                <div className="container">
                    <div className="order-container">
                        <List
                            size="large"
                            header={<div>订单/{user.username}</div>}
                            bordered
                            dataSource={this.state.orders}
                            pagination={{
                                onChange :page => {
                                    console.log(page);
                                },
                                pageSize: 5,
                            }}
                            renderItem={item =>
                                <List.Item>
                                    <OrderItem info={item}/>
                                </List.Item>
                            }
                        />
                    </div>
                </div>
            </section>

        );
    }
}
