import React from "react";
import 'antd/dist/antd.css';
import {Menu} from 'antd'
import {history} from "../utils/history";

const items = [
    {
        label: '所有书籍',
        key: 'books',
        link: "/",
    },
    {
        label: '我的购物车',
        key: 'cart',
        link: "/my-cart",
    },
    {
        label: '我的订单',
        key: 'order',
        link: "/my-order",
    }
];

const MenuBar = () => {
    var url = history.location.pathname;
    var selectKey;
    if (url == "/") selectKey = 'books';
    else if (url == "/my-cart") selectKey = 'cart';
    else if (url == "/my-order") selectKey = 'order';

    const [current, setCurrent] = React.useState(selectKey);


    const onClick = (e) => {

        if (e.key == 'books') history.push("/");
        else if (e.key == 'cart') history.push("/my-cart");
        else if (e.key == 'order') history.push("/my-order");
        history.go();
    };


    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );

};

export default MenuBar;

