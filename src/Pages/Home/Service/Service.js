import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {

    const {id, name, img, price, description} = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='services'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;