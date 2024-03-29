import React from "react";

const OrderConfirmItem = (props) => {

    const {info} = props;

    return (
        <div className="book-in-order">
            <p className="name">{info.book.name}</p>
            <p className="number">×{info.num}</p>
            <p className="price">￥{info.book.price}</p>
        </div>
    );

}

export default OrderConfirmItem;
