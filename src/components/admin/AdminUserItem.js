import React ,{useState, useEffect} from "react";
import {Button, Divider, Col, Row} from "antd";
import {changeUserStatus} from "../../services/userService";

const AdminUserItem = (props) => {

    const {info} = props;

    const changeStatus = () => {
        changeUserStatus(info.userId, ()=>props.updateUser());
    }

    return (

        <div>
            {info.available === 0 ? <h3 style={{color:"red"}}>【禁用】</h3> : <></>}
            <Row>
                <Col span={6}><h4>{info.username}</h4></Col>
                <Col span={8}><h4>{info.email}</h4></Col>
                <Col span={5}><Button onClick={changeStatus}>{info.available === 1 ? "禁用" : "解禁"}</Button></Col>
            </Row>
            <Divider />
        </div>

    );
}

export default AdminUserItem;
