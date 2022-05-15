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
                <Header style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}>
                    <MenuBar />
                </Header>
                <Content>
                    <CartList />
                </Content>
            </Layout>
        );
    }

}

export default MyCartView;
