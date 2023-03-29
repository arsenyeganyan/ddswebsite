import React from "react";

export default function Dropdown(props){
    return(
            <ul className="dropdown">
                {props.submenus.map((submenu, index) => (
                    <li className="nav--dropdown" key={index}>
                        <a className="dropdown--text" href={submenu.url}>{submenu.title}</a>
                    </li>
                ))}
            </ul>
    )
}