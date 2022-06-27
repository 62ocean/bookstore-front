import React ,{useState, useEffect} from "react";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {DatePicker, Row} from "antd";
import "../../css/chart.css"
import {bookStatistics} from "../../services/bookService";
import {callback} from "chart.js/helpers";
import {getAllUsers} from "../../services/userService";

const { RangePicker } = DatePicker;

const BookStatistics = () => {

    const [books, setBooks] = useState([]);
    const [nums, setNums] = useState([]);

    const callback = (data) => {
        let books0 = [];
        let nums0 = [];
        for (let i = 0; i < data.length; ++i) {
            books0.push(data[i].book);
            nums0.push(data[i].num);
        }
        setBooks(books0);
        setNums(nums0);
    }

    useEffect(() => {
        if (books.length === 0)
            bookStatistics(new Date(2000,0,0,0,0,0).toLocaleString(),
                new Date().toLocaleString(), callback);
    });

    const selectDate = (date, dateString) => {
        if (date === null) {
            bookStatistics(new Date(2000,0,0,0,0,0).toLocaleString(),
                new Date().toLocaleString(), callback);
            return;
        }
        let date1 = new Date(date[0]);
        let date2 = new Date(date[1]);
        date1.setHours(0); date1.setMinutes(0); date1.setSeconds(0);
        date2.setHours(23); date2.setMinutes(59); date2.setSeconds(59);

        bookStatistics(date1.toLocaleString(), date2.toLocaleString(), callback);
    }

    const data = {
        labels: books,
        datasets: [{
            label: '销量（本）',
            data: nums,
            backgroundColor: [
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
            ],
            borderWidth: 1,
        }],
    };
    const options = {
        indexAxis: 'y',
    };

    return (
        <div className="container">
            <div >
                <h2>**热销书籍前十排行榜**</h2>
                <Row>
                    <p>统计时间范围：</p>
                    <RangePicker onChange={selectDate}  style={{marginBottom: 20}}/>
                </Row>

            </div>
            <Bar className="chart" options={options} data={data} />
        </div>


    );


}

export default BookStatistics;
