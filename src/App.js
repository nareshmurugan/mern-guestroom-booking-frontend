import React from 'react';
import Navbar from './Navbar';
import Payment from './Payment';
import { useState } from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import Roomscreen from './Roomscreen';
import Services from './Services';
import Aboutus from './Aboutus';
import Bookings from './Bookings';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import Footer from './Footer';



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
