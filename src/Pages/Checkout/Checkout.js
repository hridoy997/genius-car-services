import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseServiceDetail from '../../Hooks/UseServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {

    const {serviceId} = useParams();
    const [service] = UseServiceDetail(serviceId);

    const [user, loading, error] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name:'abc',
    //     email:'abc@gmail.com',
    //     address:'rangpur, Dhaka',
    //     phone: '01711111111'
    // });

    // const handelAddressChange = event => {
    //     // console.log(event.target.value);
    //     const {address,...rest} = user;
    //     // console.log(address,rest);
    //     const newAddress = event.target.value;
    //     const newUser = {address:newAddress,...rest};
    //     // console.log(newUser);
    //     setUser(newUser);

    // }

    const handlePlaceOrder = event => {
        event.preventDefault();

        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            adderss: event.target.address.value,
            phone: event.target.phone.value
            // adderss: address,
            // phone: phone
        }

        // axios.post('http://localhost:5000/order', order)
        axios.post('https://genius-car-services-server-tx26.onrender.com/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId) {
                toast("Youe Order id Booked!!!");
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName || ''} name='name' placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email || ''} name='email' placeholder='Email' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="text" value={service?.name || ''} name='service' placeholder='Service' required readOnly
                />
                <br />
                <input className='w-100 mb-2' type="text"  name='address' placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Phone Number' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>


        </div>
    );
};

export default Checkout;