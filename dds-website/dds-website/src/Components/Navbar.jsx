import { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

export default function Navbar(){
    const [check, setCheck] = useState(false);
    
    return(
        <nav>
            <input 
                type='checkbox' 
                id="nav--check" 
                onChange={() => setCheck(!check)}
            />
            <label htmlFor="nav--check" className="nav--checkbtn">
                {check ? <FontAwesomeIcon icon={faXmark} /> :
                <FontAwesomeIcon icon={faBars} />}
            </label>
            <NavLink to="/">
                <img
                    className="nav--logo" 
                    src="././images/design dental eng-8.png"
                />
            </NavLink>
            <div className="nav--items">
                <ul>
                    <li>
                        <NavLink
                            className="a"
                        >
                            Մեր մասին ⬇
                        </NavLink>
                        <ul className="dropdown">
                            <li>
                                <NavLink
                                    to="/history" 
                                    className={({ isActive }) => isActive ? "nav--active" : "a"}
                                >
                                    Պատմություն
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/founders" 
                                    className={({ isActive }) => isActive ? "nav--active" : "a"}
                                >
                                    Հիմնադիրներ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/staff"
                                    className={({ isActive }) => isActive ? "nav--active" : "a"}
                                >
                                    Աշխատակազմ
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink 
                            to="/services"
                            className={({ isActive }) => isActive ? "nav--active" : "a"}
                        >
                            Ծառայություններ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact"
                            className={({ isActive }) => isActive ? "nav--active" : "a"}
                        >
                            Կապնվել
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/workinghours"
                            className={({ isActive }) => isActive ? "nav--active" : "a"}
                        >
                            Աշխատանքային ժամեր
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}