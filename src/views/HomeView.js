import React , {Component} from "react";
import {Layout} from "antd";
import MenuBar from "../components/MenuBar";
import Banner from  "../components/Banner"
import SearchBar from "../components/SearchBar";
import {BookList} from "../components/BookList";

const {Header, Content, Footer} = Layout;

class HomeView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Header>
                    <MenuBar />
                </Header>
                <Content>
                    <div>
                        <Banner />
                        <SearchBar />
                        <BookList />
                    </div>
                </Content>
            </Layout>

        )
    }
}

export default HomeView;
