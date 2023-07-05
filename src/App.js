import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardHomeIntro from './components/CardHomeIntro';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<CardHomeIntro/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
