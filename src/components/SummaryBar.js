import React from "react";
import {Button} from "antd";
import "../css/bookstrap.css"
import {Link} from "react-router-dom";

const SummaryBar = (props) => {

    return (
        <div className="summary-bar">
            <h2 style={{float:"left"}}>总价：111111</h2>
            <div className="summary-button">
                <Button><Link to="/take-order">结算</Link></Button>
            </div>
        </div>

    );

}

export default SummaryBar;
