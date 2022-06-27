import React from "react";
import {Divider, Layout} from "antd";
import MenuBar from "../components/MenuBar";
import BookDetail from "../components/BookDetail";
import Banner from "../components/Banner";
import {BookList} from "../components/BookList";
import AdminMenuBar from "../components/AdminMenuBar";
import AdminUserList from "../components/admin/AdminUserList";
import AdminBookList from "../components/admin/AdminBookList";
import BookStatistics from "../components/admin/BookStatistics";
import UserStatistics from "../components/admin/UserStatistics";

const {Header, Content, Footer} = Layout;

class StatisticsView extends React.Component {
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
                        <BookStatistics />
                        <Divider />
                        <UserStatistics />
                    </div>
                </Content>
            </Layout>

        )
    }

}

export default StatisticsView;
