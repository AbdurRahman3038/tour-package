import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    console.log(user.email);
    useEffect(() => {
        fetch(`https://shocking-citadel-21143.herokuapp.com/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data));

    }, [user]);

    let serial = 1;

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://shocking-citadel-21143.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBookings = myBookings.filter(myBooking => myBooking._id !== id);
                        setMyBookings(remainingBookings);
                    }
                });
        }
    }

    return (
        <div>
            <h2 className="top-title text-center my-3">Your Booking List</h2>
            <p className="top-title text-center" >*You can cancel any Package</p>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Starting Date</th>
                        <th scope="col">Ending Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myBookings.map(myBooking => <tr key={myBooking._id}>
                            <td data-label="serial">{serial++}</td>
                            <td data-label="name">{myBooking.name}</td>
                            <td data-label="email">{myBooking.email}</td>
                            <td data-label="phone">{myBooking.phone}</td>
                            <td data-label="address">{myBooking.address}</td>
                            <td data-label="start">{myBooking.pre_date}</td>
                            <td data-label="end">{myBooking.post_date}</td>
                            <td data-label="status">{myBooking.status}</td>
                            <td data-label="action"> <button onClick={() => handleDeleteUser(myBooking._id)}>Cancel</button></td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyOrders;