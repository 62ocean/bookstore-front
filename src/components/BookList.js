import React from 'react';
import {List} from 'antd'
import {Book} from './Book'
import {getBooks} from "../services/bookService";
import SearchBar from "./SearchBar";



export class BookList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {

        const callback =  (data) => {
            // console.log(data);
            this.setState({books: data});
        }

        getBooks( callback);

    }

    render() {
        return (
            <div>
                <SearchBar />

                <div className="container">
                    <List
                        grid={{gutter: 10, column: 5}}
                        dataSource={this.state.books}
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
