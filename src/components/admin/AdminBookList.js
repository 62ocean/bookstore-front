import React ,{useState, useEffect} from "react";
import {List, Avatar, Input, Row, Col} from "antd";
import SearchBar from "../SearchBar";
import {Book} from "../Book";
import {useSearchParams} from "react-router-dom";
import {getBook, getBooks} from "../../services/bookService";
import AdminBookItem from "./AdminBookItem";
import AddBookModal from "./AddBookModal";

const { Search } = Input;


const AdminBookList = (props) => {

    const [books, setBooks] = useState([]);
    const [filterText, setFilterText] = useState("");

    // console.log(id);
    useEffect(() => {
        const callback =  (data) => {
            // console.log(data);
            // console.log(data);
            setBooks(data);
        }

        if (books.length === 0) getBooks(callback);
    });

    const updateData = () => {
        const callback =  (data) => {
            // console.log(data);
            setBooks(data);
        }
        getBooks(callback);
    }

    const onChangeSearch = (filterText) => {
        setFilterText(filterText);
    }

    const showBooks = [];
    books.forEach((book) => {
        if ((book.name.indexOf(filterText) === -1) || (book.available === 0)) return;
        showBooks.push(book);
    });

    return (
        <div>
            {/*<SearchBar onFilterTextChange={this.handleFilterTextChange}/>*/}
            <div className="container">

                <Row justify="space-between">
                    <Col span={18}>
                        <Input
                            onChange={(e)=>onChangeSearch(e.target.value)}
                            placeholder="输入书名搜索..."
                            style={{marginBottom: 30}}
                        />
                    </Col>
                    <Col span={4}>
                        <AddBookModal updateData={updateData} style={{marginBottom: 30}}/>
                    </Col>
                </Row>


                <List
                    itemLayout="horizontal"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}

                    dataSource={showBooks}
                    renderItem={item => (
                        <AdminBookItem info={item} updateData={updateData}/>
                    )}

                />
            </div>
        </div>

    );
}

export default AdminBookList;
