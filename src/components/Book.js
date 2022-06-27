import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom'
import {history} from "../utils/history";

const { Meta } = Card;

export class Book extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    //     const id = this.props.info.id;
    //     history.push("/book-detail?id="+id);
    //     history.go();
    // }

    render() {

        const {info} = this.props;

        return (
            <Link to={"/book-detail?id="+info.id}>
                <Card
                    hoverable
                    style={{ width: 230 }}
                    cover={<img alt="image" src={info.image} />}
                    // onClick={this.handleClick()}
                >
                    <Meta title={info.name} description={"￥"+info.price} />
                </Card>
            </Link>

            // </Link>
        );
    }

}
