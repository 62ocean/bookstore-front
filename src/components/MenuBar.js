import React, {useEffect} from "react";
import 'antd/dist/antd.css';
import {Menu, Modal, Result, Button, Alert, Space} from 'antd'
import {history} from "../utils/history";
import {postRequest} from "../utils/ajax";
import {Link} from "react-router-dom";
import {closeSocket} from "../utils/websocket";

const items = [
    {
        label: <Link to={'/home'}>所有书籍</Link>,
        key: 'books',
    },
    {
        label: <Link to={'/my-cart'}>我的购物车</Link>,
        key: 'cart',
    },
    {
        label: <Link to={'/my-order'}>我的订单</Link>,
        key: 'order',
    },
    {
        label: '退出登录',
        key: 'logout',
    }
];

const MenuBar = () => {
    const url = window.location.pathname;

    let selectKey;
    if (url === "/home") selectKey = 'books';
    else if (url === "/my-cart") selectKey = 'cart';
    else if (url === "/my-order") selectKey = 'order';

    const [current, setCurrent] = React.useState(selectKey);
    const [loginTime, setLoginTime] = React.useState(1000);
    const [showTime, setShowTime] = React.useState(false);


    const onClick = (e) => {
        if (e.key === 'logout') {
            postRequest("/logout", null, (data) => {
                console.log(data);
                setLoginTime(data);
                setShowTime(true);
            })
        }
    };

    const formatTime = (msTime) => {
        let time = msTime / 1000;
        let hour = Math.floor(time / 60 / 60);
        hour = hour.toString().padStart(2, "0");
        let minute = Math.floor(time / 60) % 60;
        minute = minute.toString().padStart(2, "0");
        let second = Math.floor(time) % 60;
        second = second.toString().padStart(2, "0");
        return `${hour}:${minute}:${second}`;
    }

    let loginTimeString = "本次登录保持时间：" + formatTime(loginTime) + ",  确定登出吗？";

    return (
        <div>
            <Menu  onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            {showTime ?
                <Alert
                    message={loginTimeString}
                    type="info"
                    action={
                        <Space direction="horizontal">
                            <Button
                                size="small"
                                type="primary"
                                onClick={ () => {
                                    localStorage.clear();
                                    closeSocket();
                                    // history.push("/");
                                    // history.go();
                                }}
                            >
                                <Link to={"/"}>确定</Link>
                            </Button>
                            <Button size="small" danger type="ghost" onClick={()=>{setShowTime(false)}}>
                                取消
                            </Button>
                        </Space>
                    }
                /> : <></>
            }

        </div>

    );

};

export default MenuBar;

