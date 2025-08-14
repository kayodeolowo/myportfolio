import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import Skillset from "./Pages/Skillset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Men from "./Pages/Men";

//import  ClipLoader  from "react-spinners/RiseLoader";

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(()=> {
  //   setLoading(true)
  //   setTimeout(()=> {
  //     setLoading(false)
  //   },2200 )
  // })

  return (
    <Router>
      <div className="bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-cyan-900/20 pointer-events-none" />
        <div className="relative z-10">
          <Navbar />
          <Home />
          <Skillset />  
          <Projects/>
          <Contact />  
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
