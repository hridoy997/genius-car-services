import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        // console.log(data);
        // const url = `http://localhost:5000/service`;
        const url = `https://genius-car-services-server-tx26.onrender.com/service`;
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result);
            toast('Service Added!!');
            event.target.reset();
        })
    }



    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add a Service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;