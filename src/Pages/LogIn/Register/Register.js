import React from 'react';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    if(user){
        navigate('/home');
        console.log(user);
    }

    const handelRegister = event => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);


    }



    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handelRegister}>
                <input type="text" name="name" placeholder='Your Name' required/>
                
                <input type="email" name="email" placeholder="Enter email" required/>
                
                <input type="password" name="password" placeholder="Password" required/>
                
                <input type="submit" value="Register" />
            </form>

            <p>Already have an account? <Link to='/login' className="text-danger pe-auto text-decoration-none"onClick={navigateLogin}>Please Login</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;