import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header-conatainer">
            <div className="">
                <Link to="/"> <img src={img} className="header-img" alt="" /></Link>
            </div>
            <div className="navbar-container">
                <Link to="/" className="nav">Home</Link>
                <Link to="/my-orders" className="nav">My Orders</Link>
                <Link to="/manage-orders" className="nav">Manage Orders</Link>
                <Link to="/manage-packages" className="nav">Manage Packages</Link>
                <Link to="/add-new" className="nav">Add Package</Link>
                <Navbar className="name"> {user.displayName} </Navbar>
                {
                    user.email ?
                        <button className="logout" onClick={logOut}>Log Out</button> :
                        <Link to="/login" className="login">Login</Link>
                }
            </div>

        </div>
    );
};

export default Header;