import { useContext, useState } from "react";
import { Memory } from "../../Context";

export default function OneCard({ url }) {
    const { setting_size, moves, setMoves } = useContext(Memory);

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        if(!isOpen) {
            setIsOpen(true);
            setMoves(moves + 1);
            console.log(moves);
        }
    }

    return (
        <div className={`card ${isOpen ? 'open' : ''}`} style={{ width: setting_size.width }} onClick={handleClick}>
            <img src="./images/card.png" alt="" className={isOpen ? 'back' : 'front'} />
            <img src={url} alt="" className={isOpen ? 'front' : 'back'} />
        </div>
    );
}