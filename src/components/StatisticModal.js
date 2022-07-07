import React ,{useState, useEffect} from "react";
import {Button, Col, ConfigProvider, DatePicker, List, Modal} from "antd";
import {userBookStatistics, userStatistics} from "../services/userService";
import zhCN from 'antd/lib/locale/zh_CN';
const { RangePicker } = DatePicker;

const StatisticModal = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const callback = (data) => {
        setData(data);
    }

    const selectDate = (date, dateString) => {
        if (date === null) setData([]);
        let date1 = new Date(date[0]);
        let date2 = new Date(date[1]);
        date1.setHours(0); date1.setMinutes(0); date1.setSeconds(0);
        date2.setHours(23); date2.setMinutes(59); date2.setSeconds(59);

        userBookStatistics(user.userId, date1.toLocaleString(), date2.toLocaleString(), callback);
    }

    let totalPrice = 0, totalNum = 0;
    data.forEach((item) => {
        totalPrice += item.price * item.num;
        totalNum += item.num;
    })


    return (
        <>
            <Button type="primary" onClick={showModal}>
                购书统计
            </Button>
            <Modal
                title="购书统计"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button onClick={handleCancel}>
                        关闭
                    </Button>
                ]}
            >

                <RangePicker  onChange={selectDate}  style={{marginBottom: 30}}/>


                <h4>购书总本数：{totalNum} &emsp; 购书总金额：￥{totalPrice.toFixed(2)}</h4>
                <List
                    size="small"
                    bordered
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 6,
                    }}

                    dataSource={data}
                    renderItem={(item) => <p>&emsp;{item.book} &emsp;￥{item.price.toFixed(2)} &emsp;×{item.num}</p>}
                />
            </Modal>
        </>
    );
}

export default StatisticModal;
