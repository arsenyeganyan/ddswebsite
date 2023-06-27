import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
    return(
        
        <div className="contactPage">
            <section className="contactTitle">
                <FontAwesomeIcon icon={faAddressBook} id="book"/>
                Մեզ հետ կապնվելու միջոցները
            </section>

            <section className="phone">
                Զանգահարել +374 95095509 հեռախոսահամարին
            </section>

            <section className="email">
                Էլեկտրոնային նամակների համար գրել design.dental.studio.yerevan@gmail.com հասցեին
            </section>

            <section className="sm">

                <FontAwesomeIcon icon={faInstagram}/>
                <a href="https://www.instagram.com/design_dentalstudio/" className="igLink">
                    @design_dentalstudio
                </a>

                <FontAwesomeIcon icon={faFacebook}/>
                <a href="https://www.facebook.com/design.dental.studio.yerevan" className="fbLink">
                    @design.dental.studio.yerevan
                </a>

            </section>

            <section className="address">
                Այցելել մեզ հետևյալ հասցեով` Ք. Երևան, Փիրումյաններ 4/3
            </section>
        </div>

    )
}