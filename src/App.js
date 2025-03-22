import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CallUs from './components/Callus';
import TqCard from './components/TaleeqatCards';
import Product from './components/Product';
import TwCard from './components/TawzeeatCard';
import StCard from './components/StandatCard';
import Location from './components/Location'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callus" element={<CallUs />} />
        <Route path="/tqcard" element={<TqCard />} />
        <Route path="/twcard" element={<TwCard />} />
        <Route path='/stcard' element={<StCard/>}/>
        <Route path="/product" element={<Product />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
