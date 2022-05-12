import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom'

const { Meta } = Card;

export class Book extends React.Component{

    render() {

        const {info} = this.props;

        return (
            // <Link to={{
            //     pathname: '/bookDetails',
            //     search: '?id=' + info.bookId}}
            //       target="_blank"
            // >
            <Link to="/book-detail">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="image" src={require('../assets/'+info.image)} />}
                >
                    <Meta title={info.name} description={info.price} />
                </Card>
            </Link>

            // </Link>
        );
    }

}
