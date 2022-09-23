import React from "react";
import {Layout} from "antd";
import AdminMenuBar from "../components/admin/AdminMenuBar";
import AdminOrderList from "../components/admin/AdminOrderList";

const {Header, Content, Footer} = Layout;

class AdminOrderView extends React.Component {
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
                    <AdminMenuBar />
                </Header>
                <Content>
                    <div style={{paddingTop: 80}}>
                        <AdminOrderList />
                    </div>
                </Content>
            </Layout>

        )
    }

}

export default AdminOrderView;
