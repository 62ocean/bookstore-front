import React ,{useState, useEffect} from "react";
import "../css/bookdetail.css"
import {Button, Space, message} from "antd";
import {Link, useSearchParams} from "react-router-dom";
import {getBook} from "../services/bookService";
import {addCartBook} from "../services/cartService";



const BookDetail = (props) => {

    const [book, setBook] = useState(0);

    const [params] = useSearchParams();
    const id = params.get("id");
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(id);

    useEffect(() => {
        const callback =  (data) => {
            console.log(data);
            setBook(data);
        }
        if (book === 0) {
            getBook(id, callback);
        }
    });

    const HandleAddCart = () => {
        // console.log(id, user.userId);
        const data = {
            "book_id" : id,
            "user_id" : user.userId,
        };
        console.log(data);
        addCartBook(data, add_callback);
    }
    const add_callback = (data) => {
        // console.log(data);
        if (data === 2) message.info(book.name+"添加购物车成功！");
        else message.info(book.name+"已在购物车中！");

    }

    return (
        <section id="details">
            <div className="container">
                <div className="book-details-container">
                    <div className="book-details-img">
                        <img className="autoImg" src={book.image} />
                    </div>
                    <div className="book-details-info">
                        <h2>{book.name}</h2>
                        <br />
                        <p>作者：{book.author}</p>
                        <p>类别：{book.type}</p>
                        <br />
                        <p>
                            {book.description}
                        </p>
                        <br />
                        <h2 className="book-price">￥{book.price}</h2>
                        <p>库存：{book.inventory}</p>
                        <br />
                        <br />
                        <Button onClick={HandleAddCart}>加入购物车</Button>
                        <Button>立即购买</Button>
                        <Link to={"/home"}><Button>返回</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookDetail;
