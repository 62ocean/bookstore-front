import React ,{useState, useEffect} from "react";
import {List, Avatar, Input, DatePicker} from "antd";
import {getAllUsers} from "../../services/userService";
import AdminUserItem from "./AdminUserItem";
import {getAllOrders} from "../../services/orderService";
import AdminOrderItem from "./AdminOrderItem";
import SearchBar from "../SearchBar";
import {Book} from "../Book";
import {useSearchParams} from "react-router-dom";
import {getBook, getBooks} from "../../services/bookService";
const { RangePicker } = DatePicker;


const AdminOrderList = (props) => {

    const [orders, setOrders] = useState([]);
    const [selectRange, setSelectRange] = useState([]);


    // console.log(id);

    useEffect(() => {
        const callback =  (data) => {
            // console.log(data);
            setOrders(data);
        }

        if (orders.length === 0) getAllOrders(callback);
    });

    const selectDate = (date, dateString) => {
        if (date === null) setSelectRange([]);
        else {
            let range = [new Date(date[0]), new Date(date[1])];
            range[0].setHours(0); range[0].setMinutes(0); range[0].setSeconds(0);
            range[1].setHours(23); range[1].setMinutes(59); range[1].setSeconds(59);
            console.log(range);
            setSelectRange(range);
        }
    }

    let showOrders = [];
    if (selectRange.length === 0) showOrders = orders;
    else {
        orders.forEach((order) => {
            let time = new Date(order.time);
            if (time >= selectRange[0] && time <= selectRange[1]) showOrders.push(order);
        })
    }


    return (
        <div>
            {/*<SearchBar onFilterTextChange={this.handleFilterTextChange}/>*/}
            <div className="container">
                <RangePicker onChange={selectDate}  style={{marginBottom: 30}}/>
                {/*<Input placeholder="输入书名搜索..." style={{marginBottom: 30}}/>*/}
                <List
                    itemLayout="horizontal"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={showOrders}
                    renderItem={item => (
                        <AdminOrderItem info={item}/>
                    )}
                />
            </div>
        </div>

    );
}

export default AdminOrderList;
