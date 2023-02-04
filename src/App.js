import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Signin from './pages/signin';
import Navbar from './components/Navbar';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
        <Route signin path='/signin' element={<Signin/>} exact />
        <Route index path='/' element={<Home/>} exact />
        </Routes>
      </Router>
  );
};

export default App;
