import React from "react";
import {List} from "antd";
import CartItem from "./CartItem";
import {getCartBooks} from "../services/cartService";
import "../css/shopping-cart.css"
import SummaryBar from "./SummaryBar";

export class CartList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {cartBooks: []};
    }

    componentDidMount() {

        const callback =  (data) => {
            console.log(data);
            this.setState({cartBooks:data});
        };
        const user = JSON.parse(localStorage.getItem("user"));
        getCartBooks(user.userId, callback);

    }

    render() {
        let cartBooks = this.state.cartBooks;
        let totalPrice = 0;
        for (let i = 0; i < cartBooks.length; ++i) {
            // console.log(orders[i]);
            totalPrice += cartBooks[i].price * cartBooks[i].num;
        }
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <section id="shopping-cart">
                <div className="container">
                    <div className="cart-container">
                        <List
                            size="large"
                            header={<div>购物车/{user.username}</div>}
                            bordered
                            dataSource={this.state.cartBooks}
                            pagination={{
                                onChange :page => {
                                    console.log(page);
                                },
                                pageSize: 5,
                            }}
                            renderItem={item =>
                                <List.Item>
                                    <CartItem info={item}/>
                                </List.Item>
                            }
                        />
                    </div>
                </div>
                <SummaryBar totalPrice={totalPrice.toFixed(2)}/>
            </section>

        );
    }
}
