import React from "react";
import { faStethoscope, faEarthAmericas, faUserDoctor, faCommentsDollar} from 
"@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Advantages(){
    return(
        <div className="advant">
            <h2 className="adv--head">Ինչու՞ ընտրել Design Dental Studio-ն</h2>
            <div className="advs">
                <section className="adv2">
                    <FontAwesomeIcon icon={faStethoscope} id="icon"/>
                    <h3>Նորագույն տեխնոլոգիայի կիրառում</h3>
                </section>

                <section className="adv2">
                    <FontAwesomeIcon icon={faEarthAmericas} id="icon"/>
                    <h3>Հարմարավետ միջավայր</h3>
                </section>

                <section className="adv3">
                    <FontAwesomeIcon icon={faUserDoctor} id="icon"/>
                    <h3>Փորձառու բժիշկներ</h3>
                </section>

                <section className="adv4">
                    <FontAwesomeIcon icon={faCommentsDollar} id="icon"/>
                    <h3>Արագ սպասարկում</h3>
                </section>
            </div>
        </div>
    )
}