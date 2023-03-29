import React from "react";
import './style.css';
import Navbar from "./Components/Navbar";
import Description from "./Components/Description";
import Services from "./Components/Services";
import Advantages from "./Components/Advantages";
import Parters from "./Components/Partners";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

export default function App(){
  return(
    <div>
      <Navbar />
      <Description />
      <Services />
      <Advantages/>
      <Parters />
      <Map />
      <Footer />

    </div>
  )
}