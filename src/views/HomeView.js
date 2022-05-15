import React , {Component} from "react";
import {Layout} from "antd";
import MenuBar from "../components/MenuBar";
import Banner from  "../components/Banner"
import SearchBar from "../components/SearchBar";
import {BookList} from "../components/BookList";
import "../css/bootstrap.css"

const {Header, Content, Footer} = Layout;

class HomeView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Header style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}>
                    <MenuBar />
                </Header>
                <Content>
                    <div>
                        <Banner />
                        <BookList />
                    </div>
                </Content>
            </Layout>

        )
    }
}

export default HomeView;
