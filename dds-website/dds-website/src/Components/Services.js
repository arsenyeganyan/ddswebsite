import React from "react";
import { Link } from "react-router-dom";

export default function Services(){

    const style = {
        color: "black"
    }

    return(
        <div className="services">
            <Link to="/services" style={style}>
                <section 
                    className="orthodont">
                    Օրթոդոնտիա
                </section>
                <section 
                    className="orthoped">
                    Օրթոպեդիա
                </section>
                <section 
                    className="surg">
                    Վիրաբուժություն
                </section>
            </Link>
        </div>
    )
}