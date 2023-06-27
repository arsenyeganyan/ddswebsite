import staffData from "/Users/arsen/Desktop/projects/ddswebsite/dds-website/dds-website/src/staffData.js";

export default function Team(){
    
    const data = staffData;

    return(
        <div>
            {data.map(( item ) => (     
                <ul>
                    <li>
                        {item.name}
                    </li>

                    <li>
                        {item.occupation}
                    </li>
                </ul>
            ))}
        </div>
    )

}