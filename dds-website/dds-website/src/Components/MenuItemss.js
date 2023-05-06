import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "./Dropdown";

export default function MenuItemss(props){

    const style = {
        color: "white"
    }

    const [dropdown, setDropdown] = useState(false);

    return(
        <div className="menu--items">
            {props.items.submenu ? (
                <section className="drop--menu">

                    <li className="nav--specs--d">
                        <Link 
                            id="nav--text" 
                            to={props.items.submenu.url} 
                            style={style}
                            onClick={() => setDropdown(!dropdown)}
                        >
                            {props.items.title} 
                            <FontAwesomeIcon icon={faSortDown} id="sort--down" />
                        </Link>
                    </li>
                    
                    <Dropdown
                        submenus={props.items.submenu}
                        show={dropdown}
                    />
                </section>
            ) : (
                    <li className="nav--specs">
                        <Link id="nav--text" to={props.items.url} style={style}>
                            {props.items.title}
                        </Link>
                    </li>
            )}
        </div>
    )
}        