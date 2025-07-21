import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Cover from './components/Cover/Cover';
import Explore from './components/Explore/Explore';
import Benifit from './components/Benifit/Benifit';
import Footer from './components/Footer/Footer';
import Mobiles from './components/Mobiles/Mobiles';
import Gadgets from './components/Gadgets/Gadgets';
import Peripheral from './components/Peripheral/Peripheral';
import Nav from './components/Nav/Nav';

function App() {
  
  return (
    <>
  {/* <BrowserRouter>
  <Nav/>
  <Cover/>  
  <Explore/>  
  <Benifit/>
  <Footer/>
    <Routes>
  <Route path='/mobile' element={<Mobiles/>} />
  <Route path='/gadgets' element={<Gadgets/>}/>
  <Route path='/peripheral' element={<Peripheral/>} />
  </Routes>
  </BrowserRouter> */}

  <BrowserRouter>
      <Nav />

      <Routes>
        {/* Home Route - only Cover, Explore, Benifit */}
        <Route path="/" element={
          <>
            <Cover />
            <Explore />
            <Benifit />
          </>
        } />

        {/* Other Pages */}
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/peripheral" element={<Peripheral />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
