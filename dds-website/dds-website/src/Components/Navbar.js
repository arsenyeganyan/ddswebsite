import React, { useState } from "react";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom";

import menuItems from "./menuItems";
import MenuItemss from "./MenuItemss";

export default function Navbar(){

    const [check, setCheck] = useState(false);
    const checking = () => setCheck(!check);

    return(
        <>
            <nav>
                <input 
                    type='checkbox' 
                    id="nav--check" 
                    onChange={checking}
                />
                
                <label htmlFor='nav--check' className="nav--checkbtn">
                    
                    {check ? <FontAwesomeIcon icon={faXmark} /> :
                    <FontAwesomeIcon icon={faBars} />}
                    
                </label>

                <Link to="/" exact>
                    <img 
                        className="nav--logo" 
                        src="././images/design dental eng-8.png"
                    />
                </Link>

                <ul className="nav--items">
                {menuItems.map((menu, index) => {
                    return <MenuItemss items={menu} key={index}/>
                })}
                </ul>
            </nav>    
        </>
    )
}