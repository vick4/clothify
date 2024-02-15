import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Home />
      <Footer />
    </>
  )
}

export default App
