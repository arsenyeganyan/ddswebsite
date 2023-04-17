import React from "react";

import Description from "./Description";
import Services from "./Services";
import Advantages from "./Advantages";
import Partners from "./Partners";
import Map from "./Map";
import Footer from "./Footer";

export default function Main(){
    return(
        <div>
            <Description />
            <Services />
            <Advantages/>
            <Partners />
            <Map />
            <Footer />
        </div>
    )
}