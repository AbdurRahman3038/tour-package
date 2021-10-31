import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    // console.log(props);
    const { _id, title, price, description, img } = props.tourPackage;

    return (
        <div>
            <Card className="single-card">
                <Card.Img variant="top" className="package-img-style" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer-1">
                    <h6>BDT {price}</h6> <h6>(Per Package)</h6>
                </Card.Footer>
                <Card.Footer className="card-footer">
                    <Link to={`/booking/${_id}`}><button className="book-appointment">Book Package <i className="far fa-calendar-check"></i></button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Package;