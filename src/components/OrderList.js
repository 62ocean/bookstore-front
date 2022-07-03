import React from "react";
import {List, DatePicker, Col, Button, Row} from "antd";
import OrderItem from "./OrderItem";
import {getOrders} from "../services/orderService";
import "../css/order.css"
import StatisticModal from "./StatisticModal";

const { RangePicker } = DatePicker;

export class OrderList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            selectRange: [],
        };

        this.selectDate = this.selectDate.bind(this);
    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({orders:data});
        };

        const user = JSON.parse(localStorage.getItem("user"));
        getOrders(user.userId, callback);
    }

    selectDate(date, dateString) {
        if (date === null) this.setState({selectRange: []});
        else {
            let range = [new Date(date[0]), new Date(date[1])];
            range[0].setHours(0); range[0].setMinutes(0); range[0].setSeconds(0);
            range[1].setHours(23); range[1].setMinutes(59); range[1].setSeconds(59);
            console.log(range);
            this.setState({selectRange: range});
        }
    }

    render() {
        let showOrders = [];
        if (this.state.selectRange.length === 0) showOrders = this.state.orders;
        else {
            this.state.orders.forEach((order) => {
                let time = new Date(order.time);
                if (time >= this.state.selectRange[0] && time <= this.state.selectRange[1]) showOrders.push(order);
            })
        }

        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <section id="order">
                <div className="container">
                    <Row justify="space-between">
                        <Col span={5}><RangePicker onChange={this.selectDate}  style={{marginBottom: 30}}/></Col>
                        <Col span={5}><StatisticModal /></Col>
                    </Row>

                    <div className="order-container">
                        <List
                            size="large"
                            header={<div>订单/{user.username}</div>}
                            bordered
                            dataSource={showOrders}
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
