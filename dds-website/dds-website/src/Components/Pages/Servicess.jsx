import { useState, useEffect } from "react";

export default function Servicess(){
    const [info, setInfo] = useState();

    useEffect(() => {
        fetch("/data/services.json")
            .then((res) => res.json())
            .then((data) => setInfo(data))
    }, []);
    // console.log(info);

    if(!info){
        return <div className="load">Loading the page...</div>
    }
    return(
        <div className="service--description">
            <h1 className="info--title">Որո՞նք են մեր աշխատանքային ոլորտները</h1>
            <div className="info">
                {info.data.map((i) => (
                    <h2 className="indiv--title">{i.name}</h2>
                ))}
            </div>
        </div>
    )
}
