import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

import menuItems from "./menuItems";
import MenuItemss from "./MenuItemss";
import Button from "./Button";
import Dropdown from "./Dropdown";

export default function Navbar(){

    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click)

    const path = window.location.pathname;

    return(
        <>
            <nav>
                <input type='checkbox' id="nav--check" />
                <label htmlfor='nav--check' className="nav--checkbtn">
                    <FontAwesomeIcon icon={faBars} />
                </label>

                <img className="nav--logo" src="././images/dds-logo.jpg"/>

                <ul className="nav--items">
                {menuItems.map((menu, index) => {
                    return <MenuItemss items={menu} key={index}/>
                })}
                </ul>

                
            </nav>    
        </>
    )
}