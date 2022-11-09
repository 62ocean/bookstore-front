import React from 'react';
import {List} from 'antd'
import {Book} from './Book'
import {getBooks, searchBooks} from "../services/bookService";
import SearchBar from "./SearchBar";



export class BookList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            filterText: "",
        };
        // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.searchBooks = this.searchBooks.bind(this);
        this.getAllBooks = this.getAllBooks.bind(this);
    }

    componentDidMount() {

        this.getAllBooks();

    }

    // handleFilterTextChange(filterText) {
    //     this.setState({
    //         filterText: filterText,
    //     });
    // }

    searchBooks(keyword) {
        const callback =  (data) => {
            // console.log(data);
            this.setState({books: data});
        }

        searchBooks(keyword, callback);
    }
    getAllBooks() {
        const callback =  (data) => {
            // console.log(data);
            this.setState({books: data});
        }

        getBooks( callback);
    }


    render() {
        const filterText = this.state.filterText;
        const showBooks = [];
        this.state.books.forEach((book) => {
            if ((book.name.indexOf(filterText) === -1)) return;
            showBooks.push(book);
        });

        return (
            <div>
                <SearchBar onSearch={this.searchBooks} onAll={this.getAllBooks}/>

                <div className="container">
                    <List
                        grid={{gutter: 10, column: 5}}
                        dataSource={showBooks}
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 15,
                        }}

                        renderItem={item => (
                            <List.Item>
                                <Book info={item} />
                            </List.Item>
                        )}
                    />
                </div>
            </div>


        );
    }
}
