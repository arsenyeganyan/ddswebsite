import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";

export default function MenuItemss(props){
    return(
            props.items.submenu ? (
                <>
                    <Link to={props.items.submenu.url}>
                        <li className="nav--specs" aria-haspopup='menu'>
                            <a  className="nav--text" href={props.items.submenu.url}>
                                {props.items.title}
                            </a>
                        </li>
                    </Link>
                    <Dropdown submenus={props.items.submenu}/>
                </>
            ) : (
                <Link>
                    <li className="nav--specs">
                        <a className="nav--text" href={props.items.url}>{props.items.title}</a>
                    </li>
                </Link>
            )
    )
}        