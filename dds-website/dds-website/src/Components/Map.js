import React from "react";

export default function Map(){
    return(
        <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.472214913706!2d44.49132331537298!3d40.22080177938844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97ff073a9945%3A0xeb732f6390d83bfa!2sPirumianner%20St%2C%20Yerevan%200054!5e0!3m2!1sen!2sam!4v1680636816057!5m2!1sen!2sam"
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