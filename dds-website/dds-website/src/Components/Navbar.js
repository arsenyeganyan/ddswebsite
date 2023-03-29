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

            {/* <img className="nav--logo" src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-9/173435438_131086642357289_3581892115033150764_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XxpQK-qw-poAX_d1fUE&_nc_oc=AQn7G91hxbDIqXPMc_qwqluqd_pCLNn61HGxz7FpjL19QZNoh9egYdaq8yjHzo20s2U&_nc_ht=scontent.fevn7-1.fna&oh=00_AfBsvqgoY5y9_GALWeKAzP88M7rI71ImoKa_d9jc0iPmVw&oe=640B0C00"/> */}
            
            <ul className="nav--items">
            {menuItems.map((menu, index) => {
                return <MenuItemss items={menu} key={index}/>
            })}
            </ul>
        </nav>
    )
}