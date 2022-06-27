import React from 'react';
import {List} from 'antd'
import {Book} from './Book'
import {getBooks} from "../services/bookService";
import SearchBar from "./SearchBar";



export class BookList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            filterText: "",
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    componentDidMount() {

        const callback =  (data) => {
            // console.log(data);
            this.setState({books: data});
        }

        getBooks( callback);

    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText,
        });
    }

    render() {
        const filterText = this.state.filterText;
        const showBooks = [];
        this.state.books.forEach((book) => {
            if ((book.name.indexOf(filterText) === -1) || (book.available === 0)) return;
            showBooks.push(book);
        });

        return (
            <div>
                <SearchBar onFilterTextChange={this.handleFilterTextChange}/>

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
