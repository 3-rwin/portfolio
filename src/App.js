import React from 'react'
import Header from './Header';
import Home from "./Home";
import Footer from './Footer';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import Calculator from './projects/Calculator';
import Tic from './projects/Tic';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/tic' element={<Tic />} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
