import React, { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        // fetch('http://localhost:5000/service')
        fetch('https://genius-car-services-server-tx26.onrender.com/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return [services, setServices];
};

export default UseServices;