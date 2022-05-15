import React from "react";
import {Layout} from "antd";
import MenuBar from "../components/MenuBar";
import OrderConfirm from "../components/OrderConfirm";
import OrderForm from "../components/OrderForm";

const {Header, Content, Footer} = Layout;

class TakeOrderView extends React.Component {
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
                    <OrderConfirm />
                </Content>
            </Layout>
        );
    }
}

export default TakeOrderView;
