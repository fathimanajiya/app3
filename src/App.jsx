
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from "./pages/NotFound";
import Navbar1 from "./units/Navbar1.jsx";
const App = () => {
  return (
    <>
    <Navbar1/>
             <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound />} />

       </Routes>
    </>
  );
};
export default App;
