import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function WorkingHours(){
    return(
        <div className="working--hours">
                <h1 className="whTitle">
                    <FontAwesomeIcon icon={faClock} id="clock"/>
                    Աշխատանքային գրաֆիկ
                </h1>

                <table className="workinghours">
                    <tr>
                        <td>Շաբաթվա օրեր</td>
                        <td>Երկուշաբթի</td>
                        <td>Երեքշաբթի</td>
                        <td>Չորեքշաբթի</td>
                        <td>Հինգշաբթի</td>
                        <td>Ուրբաթ</td>
                        <td>Շաբաթ</td>
                        <td>Կիրակի</td>
                    </tr>
                    <tr>
                        <td>Ժամեր</td>
                        <td>9:30-20:00</td>
                        <td>9:30-20:00</td>
                        <td>9:30-20:00</td>
                        <td>9:30-20:00</td>
                        <td>9:30-20:00</td>
                        <td>9:30-20:00</td>
                        <td>Փակ է</td>
                    </tr>
                </table>
        </div>
    )
}