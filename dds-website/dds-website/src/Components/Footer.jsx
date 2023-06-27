import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <footer>
            <div className="footer--main">
                <section className="socials">
                    <h4 className="soc--title">Հետևեք մեզ սոց ցանցերում</h4>
                    <hr id="def--hr"/>
                    <div className="soc--icons">
                        <a href="https://www.instagram.com/design_dentalstudio/">
                            <FontAwesomeIcon icon={faInstagramSquare} className="icons" id="insta"/>
                        </a>
                        <a href="https://www.facebook.com/design.dental.studio.yerevan">
                            <FontAwesomeIcon icon={faFacebookSquare} className="icons"/>
                        </a>
                    </div>
                </section>

                <section className="addresses">
                    <h4 className="add--title">Հասցե</h4>
                    <hr id="def--hr"/>
                    <h5 className="add">Ք. Երևան, Փիրումյաններ 4/3</h5>
                </section>

                <section className="contact">
                    <h4 className="con--title">Հետադարձ կապ</h4>
                    <hr id="def--hr"/>
                    <h5 className="num">+374 95095509</h5>
                    <h5 className="emailz">design.dental.studio.yerevan@gmail.com</h5>
                </section>
            </div>
            <div className="footer--cr">
                <h5 className="cr">Copyright © 2023 Design Dental Studio</h5>
            </div>
        </footer>
    )
}