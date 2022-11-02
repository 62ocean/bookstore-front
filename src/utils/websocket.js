import {history} from "./history";
import {message} from "antd";

var socket;

function openSocket() {
    console.log("websocket!!!!!");
    if (typeof (WebSocket) == "undefined") {
        alert("您的浏览器不支持WebSocket");
    } else {

        if (socket != null) {
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));
        //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
        var userId = user.userId;
        var socketUrl = "wss://localhost:8443/websocket/transfer/" + userId;
        console.log(socketUrl);
        // setConnected(true);

        socket = new WebSocket(socketUrl);
        //打开事件
        socket.onopen = function () {
            console.log("websocket已打开");
            //socket.send("这是来自客户端的消息" + location.href + new Date());
        };
        //获得消息事件
        socket.onmessage = (msg) => orderDone(msg);
        //关闭事件
        socket.onclose = function () {
            console.log("websocket已关闭");
        };
        //发生了错误事件
        socket.onerror = function () {
            console.log("websocket发生了错误");
        }
    }
}

function closeSocket() {
    if (socket === undefined || socket === null) {
        alert("请先连接");
        return;
    }
    socket.close();
    socket = null;
}

let orderDone = (msg) => {
    var serverMsg = "收到服务端信息：" + msg.data;
    console.log(serverMsg);

    history.push("/my-order");
    history.go();
}

export {openSocket, closeSocket};