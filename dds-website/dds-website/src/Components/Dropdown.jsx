import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Dropdown(props){
    
    const style = {
        color: "white",
        textTransform: "uppercase"
    }

    return(
            <div className={props.show ? "drop" : "stay"}>
                <ul className="dropdown">
                    {props.submenus.map((submenu, index) => (
                        
                        <li
                            className="nav--dropdown"
                            key={index}
                        >
                            
                            <Link className="dropdown--text" to={submenu.url} style={style}>
                                {submenu.title}
                            </Link>

                        </li>

                    ))}
                </ul>
            </div>
    )
}