import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {history} from "./utils/history";
import HomeView from "./views/HomeView";
import MyCartView from "./views/MyCartView";
import MyOrderView from "./views/MyOrderView";
import TakeOrderView from "./views/TakeOrderView";
import LoginView from "./views/LoginView";
import BookView from "./views/BookView";
import AdminBookView from "./views/AdminBookView";
import AdminUserView from "./views/AdminUserView";
import AdminOrderView from "./views/AdminOrderView";
import StatisticsView from "./views/StatisticsView";

class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Routes>
                    <Route exact path="/" element={<LoginView />} />
                    <Route exact path="/home" element={<HomeView />} />
                    <Route exact path="/my-cart" element={<MyCartView />} />
                    <Route exact path="/my-order" element={<MyOrderView />} />
                    <Route exact path="/take-order" element={<TakeOrderView />} />
                    <Route exact path="/book-detail" element={<BookView />} />

                    <Route exact path="/book-manage" element={<AdminBookView />} />
                    <Route exact path="/user-manage" element={<AdminUserView />} />
                    <Route exact path="/order-manage" element={<AdminOrderView />} />
                    <Route exact path="/statistics" element={<StatisticsView />} />
                    {/*<Redirect from="/*" to="/" />*/}
                </Routes>

            </Router>
        )
    }


}

export default BasicRoute;
