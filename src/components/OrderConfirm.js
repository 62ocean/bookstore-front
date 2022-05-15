import React from "react";
import {List} from "antd";
import "../css/order.css"
import OrderConfirmItem from "./OrderConfirmItem";
import {getCartBooks} from "../services/cartService";
import OrderForm from "./OrderForm";


export class OrderConfirm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
    }

    componentDidMount() {

        const callback =  (data) => {
            console.log(data);
            this.setState({orders:data});
        };

        const user = JSON.parse(localStorage.getItem("user"));
        getCartBooks(user.userId, callback);


    }

    render() {
        let orders = this.state.orders;
        let totalPrice = 0;
        for (let i = 0; i < orders.length; ++i) {
            // console.log(orders[i]);
            totalPrice += orders[i].price * orders[i].num;
        }
        return (
            <section id="homeSec1">
                <div className="container border-bottom">
                    <div className="section-header border-bottom">
                        <h2 className="section-title text-center wow fadeInDown">订单确认</h2>
                    </div>
                    <List
                        size="small"
                        bordered
                        dataSource={this.state.orders}
                        pagination={{
                            onChange :page => {
                                console.log(page);
                            },
                            pageSize: 4,
                        }}
                        renderItem={item =>
                            <List.Item>
                                <OrderConfirmItem info={item}/>
                            </List.Item>
                        }
                    />
                    <p className="total">总计：￥{totalPrice.toFixed(2)}</p>
                </div>
                <OrderForm price={totalPrice} />
            </section>

        );
    }
}

export default OrderConfirm;
