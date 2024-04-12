import { useContext, useEffect, useState } from "react";
import { Memory } from "../../Context";

export default function OneCard({ url }) {
    const { setting_size, moves, setMoves, allMoves, setAllMoves } = useContext(Memory);

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        if (!isOpen && moves < 2) {
            setIsOpen(true);
            setMoves(moves + 1);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (moves > 1) {
                setMoves(0);
                setAllMoves(allMoves + 1);
                setIsOpen(false);
            }
        }, 1500);
    }, [moves, setMoves, allMoves, setAllMoves])

    return (
        <div className={`card ${isOpen ? 'open' : ''}`} style={{ width: setting_size.width }} onClick={handleClick}>
            <img src="./images/card.png" alt="" className={isOpen ? 'back' : 'front'} />
            <img src={url} alt="" className={isOpen ? 'front' : 'back'} />
        </div>
    );
}