import React from "react";
import {List} from "antd";
import CartItem from "./CartItem";
import "../css/shopping-cart.css"

const BOOKS = [
    {name:'深入理解计算机系统', price:'￥100', image:"images/bk/CSAPP.jpg"},
    {name:'三体（全三册）', price:'￥20', image:"images/bk/三体.jpg"},
    {name:'小王子', price:'￥40', image:'images/bk/小王子.jpg'},
    {name:'悲惨世界（上中下）', price:'￥80', image:'images/bk/悲惨世界.jpg'},
    {name:'探索月球', price:'￥133.2', image:'images/bk/探索月球.jpg'},
    {name:'追风筝的人', price:'￥35.3', image:'images/bk/追风筝的人.jpg'},
    {name:'魔力的胎动', price:'￥35.9', image:'images/bk/魔力的胎动.jpg'},
    {name:'追风筝的人2', price:'￥35.3', image:'images/bk/追风筝的人.jpg'},
    {name:'追风筝的人3', price:'￥35.3', image:'images/bk/追风筝的人.jpg'},
    {name:'追风筝的人4', price:'￥35.3', image:'images/bk/追风筝的人.jpg'},
];

export class CartList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books: BOOKS};
    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({books:data});
        };

        // getBooks({"search":null}, callback);

    }

    render() {
        return (
            <section id="shopping-cart">
                <div className="container">
                    <div className="cart-container">
                        <List
                            size="large"
                            header={<div>购物车</div>}
                            bordered
                            dataSource={this.state.books}
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
            </section>

        );
    }
}