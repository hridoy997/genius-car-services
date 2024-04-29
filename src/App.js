import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from '../src/Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServicesDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';


function App() {

  return (
    // <div className="App">
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
