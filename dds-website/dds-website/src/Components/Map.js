import React from "react";

export default function Map(){
    return(
        <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.5075309664653!2d44.49147821537284!3d40.22001637938845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd1d4ae55555%3A0xa015221ab9d741b9!2sVardanyan%20%26%20Partners!5e0!3m2!1sen!2sam!4v1680719608830!5m2!1sen!2sam"
                width="100%" 
                height="600" 
                style={{border: "0"}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}