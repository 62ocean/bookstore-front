import React ,{useState, useEffect} from "react";
import {List, Avatar, Input} from "antd";
import {getAllUsers} from "../../services/userService";
import AdminUserItem from "./AdminUserItem";
import SearchBar from "../SearchBar";
import {Book} from "../Book";
import {useSearchParams} from "react-router-dom";
import {getBook, getBooks} from "../../services/bookService";
const { Search } = Input;

const AdminBookList = (props) => {

    const [users, setUsers] = useState([]);

    // console.log(id);
    const callback =  (data) => {
        // console.log(data);
        setUsers(data);
    }

    useEffect(() => {
        if (users.length === 0) getAllUsers(callback);
    });

    const updateUser = () => {
        getAllUsers(callback);
    }

    return (
        <div>
            {/*<SearchBar onFilterTextChange={this.handleFilterTextChange}/>*/}
            <div className="container">
                {/*<Input placeholder="输入书名搜索..." style={{marginBottom: 30}}/>*/}
                <List
                    itemLayout="horizontal"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={users}
                    renderItem={item => (
                        <AdminUserItem info={item} updateUser={updateUser}/>
                    )}
                />
            </div>
        </div>

    );
}

export default AdminBookList;
