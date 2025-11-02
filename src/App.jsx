import React from "react";
import HomePage from "./pages/Homepage/HomePage";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <HomePage />
      <Footer/>
    </>
  );
};

export default App;
