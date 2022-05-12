import React from "react";
import {List} from "antd";
import "../css/order.css"
import OrderConfirmItem from "./OrderConfirmItem";

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

export class OrderConfirm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {orders: BOOKS};
    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({books:data});
        };
    }

    render() {
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
                    <p className="total">总计：￥164</p>
                </div>
            </section>

        );
    }
}

export default OrderConfirm;
