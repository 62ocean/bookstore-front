import React from "react";
import "../css/bookdetail.css"
import {Button, Space} from "antd";

const BookDetail = (props) => {

    const {info} = props;

    return (
        <section id="details">
            <div className="container">
                <div className="book-details-container">
                    <div className="book-details-img">
                        <img className="autoImg" src={require("../assets/images/bk/CSAPP.jpg")} />
                    </div>
                    <div className="book-details-info">
                        <h2>深入理解计算机系统</h2>
                        <br />
                        <p>作者：兰德尔·E·布莱恩特</p>
                        <br />
                        <p>
                            程序员必读经典著作！理解计算机系统书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！
                        </p>
                        <br />
                        <h2 className="book-price">￥136.90</h2>
                        <p>库存：1200</p>
                        <br />
                        <br />
                        <Button>加入购物车</Button>
                        <Button>立即购买</Button>
                        <Button>返回</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookDetail;
