import React from "react";
import "../css/bootstrap.css"
import "../css/search.css"
import "../css/styles.css"
import {Button, Space, Tooltip} from "antd";
import { SearchOutlined } from '@ant-design/icons';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // handleFilterTextChange(e) {
    //     this.props.onFilterTextChange(e.target.value);
    // }
    handleSearch() {
        console.log(document.getElementById("search_content").value);
        this.props.onSearch(document.getElementById("search_content").value);
    }

    render() {
        return (
            <section id="hero-text">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2>搜索相关书籍( ´ ▽ ` )ﾉ</h2>
                            <Space size={20}>
                                <form>
                                    <input
                                        id="search_content"
                                        type="text"
                                        name="input-box"
                                        size={100}
                                        placeholder="在此输入"
                                        // value={filterText}
                                        // onChange={this.handleFilterTextChange}
                                    />
                                </form>
                                <Tooltip title="search">
                                    <Button onClick={this.handleSearch} shape="circle" icon={<SearchOutlined />} size="large" />
                                </Tooltip>
                                <Button onClick={this.props.onAll} shape="circle" size="large" >
                                    全
                                </Button>
                            </Space>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchBar;
