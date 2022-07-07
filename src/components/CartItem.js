import React ,{useState, useEffect} from "react";
import {Button, Checkbox, InputNumber} from "antd";
import {changeCartNum, deleteCartBook} from "../services/cartService";
import {history} from "../utils/history";
import "../css/shopping-cart.css"

const CartItem = (props) => {

    const {info} = props;
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(info);

    const handleDelete = () => {
        const data = {
            "book_id" : info.book.id,
            "user_id" : user.userId,
        };
        // console.log(data);
        deleteCartBook(data, callback);
    }
    const numberChange = (value) => {
        console.log('changed', value);
        changeCartNum(info.book.id, user.userId, value, callback);
    };
    const callback = (data) => {
        // this.forceUpdate();
        // console.log("back!");
        props.refresh();
    }

    return (
        <div className="book-in-cart">
            {/*<Checkbox style={{float:"left"}}/>*/}
            <div className="image">
                <img className="autoImg" src={info.book.image} alt="" />
            </div>
            <div className="info">
                <h3>{info.book.name}</h3>
                <h3>￥{info.book.price.toFixed(2)}</h3>
            </div>
            <div className="buy-number">
                <p>购买数量：</p>
                <InputNumber min={1} value={info.num} onChange={numberChange}/>
                <Button onClick={handleDelete}>删除</Button>
            </div>
        </div>
    );
}

export default CartItem;
