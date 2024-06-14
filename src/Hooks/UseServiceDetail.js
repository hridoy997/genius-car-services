import React, { useEffect, useState } from 'react';

const UseServiceDetail = serviceId => {
    const [service, setService] = useState({});
    useEffect(() => {
        // const url = `http://localhost:5000/service/${serviceId}`;
        const url = `https://genius-car-services-server-tx26.onrender.com/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    } , [serviceId])
    return [service]
};

export default UseServiceDetail;