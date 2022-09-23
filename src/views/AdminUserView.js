import React from "react";
import {Layout} from "antd";
import MenuBar from "../components/MenuBar";
import BookDetail from "../components/BookDetail";
import Banner from "../components/Banner";
import {BookList} from "../components/BookList";
import AdminMenuBar from "../components/admin/AdminMenuBar";
import AdminUserList from "../components/admin/AdminUserList";
import AdminBookList from "../components/admin/AdminBookList";

const {Header, Content, Footer} = Layout;

class AdminUserView extends React.Component {
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
                        <AdminUserList />
                    </div>
                </Content>
            </Layout>

        )
    }

}

export default AdminUserView;
