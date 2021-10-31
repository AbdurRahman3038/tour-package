import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {

    const [manageBookings, setManageBookings] = useState([]);

    useEffect(() => {
        fetch('https://shocking-citadel-21143.herokuapp.com/bookings/')
            .then(res => res.json())
            .then(data => setManageBookings(data));

    }, []);
    const handleStatus = (id, e) => {
        const orderStatus = e.target.value;
        const orderData = {
            status: orderStatus
        }

        fetch(`https://shocking-citadel-21143.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    let serial = 1;

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete this?');
        if (proceed) {
            const url = `https://shocking-citadel-21143.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBookings = manageBookings.filter(manageBooking => manageBooking._id !== id);
                        setManageBookings(remainingBookings);
                    }
                });
        }
    }

    return (
        <div>
            <h2 className="top-title text-center my-3">All Users Order List</h2>
            <p className="top-title text-center" >*This special route is for Admin to manage all order</p>
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
                        manageBookings.map(manageBooking => <tr key={manageBooking._id}>
                            <td data-label="serial">{serial++}</td>
                            <td data-label="name">{manageBooking.name}</td>
                            <td data-label="email">{manageBooking.email}</td>
                            <td data-label="phone">{manageBooking.phone}</td>
                            <td data-label="address">{manageBooking.address}</td>
                            <td data-label="start">{manageBooking.pre_date}</td>
                            <td data-label="end">{manageBooking.post_date}</td>
                            <td data-label="Status"><select name="status" onChange={(e) =>
                                handleStatus(manageBooking._id, e)} defaultValue={manageBooking.status}>
                                <option value="Pending">Pending</option>
                                <option value="On Going">On Going</option>
                                <option value="Done">Done</option>
                            </select></td>
                            <td data-label="action"> <button onClick={() =>
                                handleDeleteUser(manageBooking._id)}>Cancel</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;