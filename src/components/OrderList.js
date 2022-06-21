import React from "react";
import {List} from "antd";
import OrderItem from "./OrderItem";
import {getOrders} from "../services/orderService";
import "../css/order.css"

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
                            grid={{
                                gutter: 0,
                                column: 2,
                            }}
                            pagination={{
                                onChange :page => {
                                    console.log(page);
                                },
                                pageSize: 6,
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
