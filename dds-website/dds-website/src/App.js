import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css';

import Navbar from "./Components/Navbar";

import Main from "./Components/Pages/Main";
import Contact from "./Components/Pages/Contact";
import Founders from "./Components/Pages/Founders";
import History from "./Components/Pages/History";
import Team from "./Components/Pages/Team";
import Servicess from "./Components/Pages/Servicess";
import WorkingHours from "./Components/Pages/WorkingHours";


export default function App(){
  return(
    <div>
      
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact Component={Main}/>
          <Route path="/contact" exact Component={Contact}/>
          <Route path="/founders" exact Component={Founders}/>
          <Route path="/history" exact Component={History}/>
          <Route path="/team" exact Component={Team}/>
          <Route path="/services" exact Component={Servicess}/>
          <Route path="/workinghours" exact Component={WorkingHours}/>
        </Routes>
      </Router>

    </div>
  )
}