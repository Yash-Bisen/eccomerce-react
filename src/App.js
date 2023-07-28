import React from 'react';
import Home from './Home';
import Service from './Service';
import Contact from './Contect';
import About from './About';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import  Navbars from './Navbars';
import Footer from './Footer';

function App() {
  return (
    <>
    <div className="App">

    
    <Router>
    <Navbars />
      <Routes>
        <Route path="/" Component={Home} element={<Home/>}/>
        <Route path="/about" Component={About} element={<About/>}/>
        <Route path="/service" Component={Service} element={<Service/>}/>
        <Route path="/contact" Component={Contact} element={<Contact/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
      
      </Routes>
    </Router>

    <Footer/>
    </div>
    </>
  );
}

export default App;
