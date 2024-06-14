import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import ServiceDetail from '../../ServiceDetail/ServiceDetail';
import About from '../../About/About';
import Login from '../../LogIn/Login/Login';
import Register from '../../LogIn/Register/Register';
import RequireAuth from '../../LogIn/RequireAuth/RequireAuth';
import Checkout from '../../Checkout/Checkout/Checkout';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

const RouteWithTitle = () => {

    const location = useLocation();

    const getTitle = (pathname) => {
        switch (pathname) {
          case '/':
            return 'Home';
          case '/home':
            return 'Home';
          case '/about':
            return 'About';
          case '/login':
            return 'Login';
          case '/register':
            return 'Register';
        //   case '/service/:serviceId':
        //     return 'Service Detail';
          case '/checkout':
            return 'Checkout';
          default:
            return 'Page Not Found';
        }
      };

    return (
        <div>
            <Helmet>
                <title>{getTitle(location.pathname)} - Genius Car Services</title>
            </Helmet>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service/:serviceId" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                path="/checkout"
                element={
                    <RequireAuth>
                    <Checkout />
                    </RequireAuth>
                }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default RouteWithTitle;