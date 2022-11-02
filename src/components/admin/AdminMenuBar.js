import React from "react";
import 'antd/dist/antd.css';
import {Menu} from 'antd'
import {history} from "../../utils/history";
import {Link} from "react-router-dom";

const items = [
    {
        label: <Link to={'/book-manage'}>书籍管理</Link>,
        key: 'books',
    },
    {
        label: <Link to={'/user-manage'}>用户管理</Link>,
        key: 'user',
    },
    {
        label: <Link to={'/order-manage'}>订单管理</Link>,
        key: 'order',
    },
    {
        label: <Link to={'/statistics'}>统计</Link>,
        key: 'statistics',
    },
    {
        label: '退出登录',
        key: 'logout',
    }
];

const AdminMenuBar = () => {
    const url = window.location.pathname;

    let selectKey;
    if (url === "/book-manage") selectKey = 'books';
    else if (url === "/user-manage") selectKey = 'user';
    else if (url === "/order-manage") selectKey = 'order';
    else if (url === "/statistics") selectKey = 'statistics';

    const [current, setCurrent] = React.useState(selectKey);


    const onClick = (e) => {
        if (e.key === 'logout') {
            localStorage.clear();
            history.push("/");
            history.go();
        }
    };


    return (
        <Menu  onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );

};

export default AdminMenuBar;

