import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menuItems from "./menuItems";
import MenuItemss from "./MenuItemss";

export default function Navbar(){

    console.log(menuItems);

    return(
        <nav>
            <input type='checkbox' id="nav--check" />
            <label for='nav--check' className="nav--checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>

            <img className="nav--logo" src="././images/dds-logo.jpg"/>
            
            <ul className="nav--items">
            {menuItems.map((menu, index) => {
                return <MenuItemss items={menu} key={index}/>
            })}
            </ul>
        </nav>
    )
}