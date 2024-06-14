import axios from "axios";
import { useEffect, useState } from "react";


const UseToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {

            // console.log(user?.user?.email);
            const email = user?.user?.email;
            if(email) {
                // const {data} = await axios.post('http://localhost:5000/login',{email});
                const {data} = await axios.post('https://genius-car-services-server-tx26.onrender.com/login',{email});
                setToken(data);
                localStorage.setItem('accessToken', data);
            }

        }

        getToken();

    },[user]);
    return [token];
};

export default UseToken;