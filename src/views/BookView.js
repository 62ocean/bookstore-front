import React from "react";
import {Layout} from "antd";
import MenuBar from "../components/MenuBar";
import BookDetail from "../components/BookDetail";

const {Header, Content, Footer} = Layout;

class BookView extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
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
                    <BookDetail />
                </Content>
            </Layout>
        );
    }

}

export default BookView;
