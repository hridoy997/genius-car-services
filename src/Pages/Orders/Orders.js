import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../API/axiosPrivate';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrder = async () => {
            const email = user?.email;
            // const url = `http://localhost:5000/order?email=${email}`;
            const url = `https://genius-car-services-server-tx26.onrender.com/order?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            } 
            catch (error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                }
            }
        }

        getOrder();

    },[])
    return (
        <div>
            <h2>Your Orders : {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email} : {order.service}</p>
                </div>)
            }
        </div>
    );
};

export default Orders;