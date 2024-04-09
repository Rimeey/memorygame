import { useContext } from "react";
import { Memory } from "../../Context";

export default function OneCard({ url }) {

    const { setting_size } = useContext(Memory);

    return (
        <div className="card" style={{ width: setting_size.width }}>
            <img src="./images/card.png" alt="" className='front' />
            <img src={url} alt="" className='back' />
        </div>
    );
}