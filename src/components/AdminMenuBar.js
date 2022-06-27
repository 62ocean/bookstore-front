import React from "react";
import 'antd/dist/antd.css';
import {Menu} from 'antd'
import {history} from "../utils/history";

const items = [
    {
        label: '书籍管理',
        key: 'books',
    },
    {
        label: '用户管理',
        key: 'user',
    },
    {
        label: '订单管理',
        key: 'order',
    },
    {
        label: '统计',
        key: 'statistics',
    },
    {
        label: '退出登录',
        key: 'logout',
    }
];

const AdminMenuBar = () => {
    const url = history.location.pathname;
    let selectKey;
    if (url === "/book-manage") selectKey = 'books';
    else if (url === "/user-manage") selectKey = 'user';
    else if (url === "/order-manage") selectKey = 'order';
    else if (url === "/statistics") selectKey = 'statistics';

    const [current, setCurrent] = React.useState(selectKey);


    const onClick = (e) => {
        if (e.key === 'books') history.push("/book-manage");
        else if (e.key === 'user') history.push("/user-manage");
        else if (e.key === 'order') history.push("/order-manage");
        else if (e.key === 'statistics') history.push("/statistics");
        else if (e.key === 'logout') {
            localStorage.clear();
            history.push("/");
        }
        history.go();
    };


    return (
        <Menu  onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );

};

export default AdminMenuBar;

