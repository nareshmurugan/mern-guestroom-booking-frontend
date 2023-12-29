import React, { useState }  from 'react';
import Navbar from './header-footer/Navbar'
import Payment from './pages/Payment'
import Home from './pages/Home'
import Roomscreen from './pages/Roomscreen';
import Services from './pages/Services';
import Aboutus from './pages/Aboutus';
import Bookings from './pages/Bookings';
import Login from './logins/Login';
import Signup from './logins/Signup';
import Footer from './header-footer/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';



function App() {
  const [search, setSearch]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    console.log("Submited");
    setSearch('');
  }
  return (
    <div className="App">
      <Navbar 
        search ={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        />
      <Routes>
        <Route path="/room" element={<Roomscreen search ={search}/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
        <Route path="/payment/:_id" element={<Payment/>}/>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
