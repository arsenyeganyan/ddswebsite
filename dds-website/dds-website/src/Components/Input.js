import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function Input(){
    
    const [input, setInput] = useState("");

    function eventHandler(e){
        e.preventDefault();
        console.log("Submitted.");

        // const sub = { input };

        const form = document.querySelector('.input--form');

        const formData = new FormData(form);
        console.log(formData.get("email"));

        const data = Object.fromEntries(formData);
        console.log(data);

        fetch('https://reqres.in/api/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log("An error occured.."))
    }

    return(
        <div className="input--field">
            <h1 className="input--title">
                <FontAwesomeIcon icon={faNewspaper} id="news--icon"/>
                Ներմուծեք Ձեր էլեկտրոնային փոստը` նորություններ ստանալու համար
            </h1>

            <form className="input--form" onSubmit={eventHandler}>
                <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    className="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="input--submit"
                >
                    Հաստատել
                </button>
            </form>

        </div>
    )
}