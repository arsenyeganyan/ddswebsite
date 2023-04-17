import React from "react";
import Dropdown from "./Dropdown";

export default function MenuItemss(props){
    return(
            props.items.submenu ? (
                <>
                    {/* <button> */}
                    <li className="nav--specs" aria-haspopup='menu'>
                        <a  className="nav--text" href={props.items.submenu.url}>
                            {props.items.submenu.title}
                        </a>
                    </li>
                    {/* </button> */}
                    <Dropdown submenus={props.items.submenu}/>
                </>
            ) : (
                <li className="nav--specs">
                    <a className="nav--text" href={props.items.url}>{props.items.title}</a>
                </li>
            )
    )
}        