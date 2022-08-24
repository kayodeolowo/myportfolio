import React, {useState, useEffect} from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import Skillset from "./Pages/Skillset";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import  ClipLoader  from "react-spinners/RiseLoader";


function App() {
  const  [loading, setLoading ] = useState(false);

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },2200 )
  })

  return (
   <Router  > 
     { loading ? 
     <div className="w-full flex justify-center pt-[80%] sm:pt-[60%]  lg:pt-[20%]  h-screen  bg-[#031A30]  "> 
           <ClipLoader className="  "

      size={30}
      color={"#E0A040"}
      loading={loading}
      

      />
      </div>
     :

     
      <div className=" bg-[#031A30]   "> 
       <Navbar/> 
      <Home/>
      <About/>
      <Skillset/>
      <Projects/>
      <Contact/>
      <Footer/>
      
     </div>

     }
     
   </Router>
     

    
    
  );
}

export default App;
