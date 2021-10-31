import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import ggogleImg from '../../images/google.jpg';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    // const auth = getAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }


    return (
        <div>
            <div className="google-login" >
                <h5>Google Sign Up </h5>
                <img src={ggogleImg} className="google-img" alt="" />
                <Button onClick={handleGoogleLogin} className="google-btn">Google Sign Up</Button>
            </div>
        </div>
    );
};

export default Login;