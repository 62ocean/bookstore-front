import React from "react";
import {Checkbox, InputNumber} from "antd";
import "../css/shopping-cart.css"

const CartItem = (props) => {

    const {info} = props;

    return (
        <div className="book-in-cart">
            <Checkbox style={{float:"left"}}/>
            <div className="image">
                <img className="autoImg" src={require('../assets/'+info.image)} alt="" />
            </div>
            <div className="info">
                <h3>{info.name}</h3>
                <h3>{info.price}</h3>
            </div>
            <div className="buy-number">
                <p>购买数量：</p>
                <InputNumber min={1} max={10} defaultValue={1}/>
            </div>
        </div>
    );
}

export default CartItem;
