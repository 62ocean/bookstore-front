import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {history} from "./utils/history";
import HomeView from "./views/HomeView";
import MyCartView from "./views/MyCartView";
import MyOrderView from "./views/MyOrderView";
import TakeOrderView from "./views/TakeOrderView";
import LoginView from "./views/LoginView";
import BookView from "./views/BookView";

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
                    {/*<Redirect from="/*" to="/" />*/}
                </Routes>

            </Router>
        )
    }


}

export default BasicRoute;
