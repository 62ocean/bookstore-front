import React from "react";
import {Layout} from "antd";
import MenuBar from "../components/MenuBar";
import {CartList} from "../components/CartList";
import SummaryBar from "../components/SummaryBar";

const {Header, Content, Footer} = Layout;

class MyCartView extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Layout>
                <Header>
                    <MenuBar />
                </Header>
                <Content>
                    <CartList />
                </Content>
                <Footer>
                    <SummaryBar />
                </Footer>
            </Layout>
        );
    }

}

export default MyCartView;
