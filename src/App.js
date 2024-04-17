
import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from './components/Home';
import MeetTeam from "./components/MeetTeam";
import Navbar from './components/Navbar';
import Price from "./components/Price";
import Questions from "./components/Questions";
import SideBar from './components/SideBar';
import Transform from "./components/Transform";

function App() {
  const [open, setOpen]= useState(false)

  return (
    <Router>

    <div className="webswift-main-container">
     <header>
       <Navbar open={open} setOpen={setOpen} />
     </header>

     <main>

     </main>
     <Home />
     <SideBar />
     <Transform />
     <Features />
     <Price />
     <MeetTeam />
     <Questions />

     <footer>
      <Footer />
     </footer>
     
    </div>
    </Router>
  );
}

export default App;