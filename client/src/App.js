import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbaar/Newnav';
import { Routes, Route } from "react-router-dom"
import Sign_in from './components/signup_sigin/Sign_in';
import Sign_up from './components/signup_sigin/Sign_up';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';


function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path='/' element={<Maincomp />} />
        <Route path='/login' element={<Sign_in/>}/>
        <Route path='/register' element={<Sign_up/>}/>
        <Route path='/getproducts/:id' element={<Cart/>}/>
        <Route path='/buynow' element={<Buynow/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
