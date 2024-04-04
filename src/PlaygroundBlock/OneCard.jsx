import { useContext } from "react";
import { Memory } from "../Context";

export default function OneCard({url}) {

    const { setting_size } = useContext(Memory);

    return (
        <div className="card" style={{width: setting_size.width}}>
            <img src={url} alt="" style={{display: 'none', width: '100%', height: 'auto'}}/>
            <img src="./images/card.png" alt="" style={{display: 'block', width: '100%', height: 'auto'}}/>
        </div>
    );
}