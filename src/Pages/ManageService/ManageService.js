import React from 'react';
import UseServices from '../../Hooks/UseServices';
import { toast } from 'react-toastify';

const ManageService = () => {
    const [services,setServices] = UseServices();

    const handelDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        // const proceed = toast('Are You Sure?');
        
        if(proceed){
            // const url = `http://localhost:5000/service/${id}`
            const url = `https://genius-car-services-server-tx26.onrender.com/service/${id}`
            fetch(url, {
                method: 'delete',
                headers: {
                    'content-type': 'application/json',
                },
                // body: JSON.stringify(item),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
                toast('Service Delete!!');
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={() => handelDelete(service._id)}>X</button></h4>
                    
                </div>)
            }
        </div>
    );
};

export default ManageService;