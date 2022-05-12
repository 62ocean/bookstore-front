import React from "react";
import {Layout} from "antd";
import MenuBar from "../components/MenuBar";
import {OrderList} from "../components/OrderList";

const {Header, Content, Footer} = Layout;

class MyOrderView extends React.Component {
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
                    <OrderList />
                </Content>
            </Layout>
        );
    }
}

export default MyOrderView;
