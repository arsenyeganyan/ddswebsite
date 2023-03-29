import React from "react";

export default function Footer(){
    return(
        <footer>
            <div className="footer--main">
                <section className="socials">
                    <h4 className="soc--title">Հետևեք մեզ սոց ցանցերում</h4>
                    <hr/>
                    <div className="soc--icons">
                        
                    </div>
                </section>

                <section className="addresses">
                    <h4 className="add--title">Հասցե</h4>
                    <hr/>
                    <br/>
                    <br/>
                    <h5 className="add">Ք. Երևան, Փիրումյաններ 4/3</h5>
                </section>

                <section className="contact">
                    <h4 className="con--title">Հետադարձ կապ</h4>
                    <hr/>
                    <br/>
                    <br/>
                    <h5 className="num">+374 99435980</h5>
                    <br/>
                    <h5 className="email">example@sample.com</h5>
                </section>
            </div>

            <div className="footer--cr">
                <h5 className="cr">Copyright © 2023 Design Dental Studio</h5>
            </div>
        </footer>
    )
}