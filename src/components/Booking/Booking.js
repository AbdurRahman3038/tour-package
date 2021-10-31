
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';
import axios from 'axios';

const Booking = () => {
    const { user } = useAuth();
    const { packageId } = useParams();
    const [details, setDetails] = useState([]);
    const { register, handleSubmit, reset, } = useForm();

    useEffect(() => {
        fetch('https://shocking-citadel-21143.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                const matchedDetail = data.find((details) => details._id === packageId);
                if (matchedDetail) {
                    setDetails(matchedDetail);
                }
            });

    }, [])

    const onSubmit = data => {
        const newData = { status: 'pending' };
        Object.assign(data, newData);

        axios.post('https://shocking-citadel-21143.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Booking is submitted successfully');
                    reset();
                }
            })
    }


    return (
        <div className="booking-container">
            <div>
                <h3 className="text-center my-4 top-title">Service details of "{details.title}" </h3>
                <Card className="details-card">
                    <Card.Img variant="top" className="img-style" src={details.img} />
                    <Card.Body>
                        <Card.Title>{details.title}</Card.Title>
                        <Card.Text>
                            {details.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6>Submit the form to book this Package</h6>
                    </Card.Footer>
                </Card>
            </div>
            <div>
                <h3 className="text-center my-4 top-title">Submit Your Booking Details of {details.title}</h3>

                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control mb-3" required defaultValue={user.displayName} {...register("name")} />

                    <input className="form-control mb-3" required defaultValue={user.email} {...register("email")} />
                    <input className="form-control mb-3" required placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input className="form-control mb-3" required placeholder="Address" defaultValue="" {...register("address")} />
                    <input className="form-control mb-3" type="date" required placeholder="" defaultValue="" {...register("pre_date")} />
                    <input className="form-control mb-3" type="date" required placeholder="" defaultValue="" {...register("post_date")} />
                    <input className="form-control mb-3" required placeholder="Your Special Requiremts" defaultValue="" {...register("requirements")} />


                    <input type="submit" />
                </form>

            </div>

        </div>
    );
};

export default Booking;