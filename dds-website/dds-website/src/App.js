import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './style.css';

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

import Contact from "./Components/Pages/Contact";
import Founders from "./Components/Pages/Founders";
import History from "./Components/Pages/History";
import Team from "./Components/Pages/Team";
import Servicess from "./Components/Pages/Servicess";
import WorkingHours from "./Components/Pages/WorkingHours";

export default function App(){
  
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Main/>
  //     break

  //   case "/history":
  //     component = <History/>
  //     break
    
  //   case "/founders":
  //     component = <Founders/>
  //     break

  //   case "/team":
  //     component = <Team/>
  //     break

  //   case "/services":
  //     component = <Servicess/>
  //     break

  //   case "/contact":
  //     component = <Contact/>
  //     break

  //   case "/workinghours":
  //     component = <WorkingHours/>
  //     break
  // }

  return(
    <div>
      
      <Navbar />
      {component}
      
    </div>
  )
}