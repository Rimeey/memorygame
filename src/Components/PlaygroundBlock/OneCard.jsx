import { useContext, useEffect, useState } from "react";
import { Memory } from "../../Context";

export default function OneCard({ url, index }) {
    const { setting_size, moves, setMoves, allMoves, setAllMoves, link, setLink } = useContext(Memory);

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        if (!isOpen && moves < 2) {
            setIsOpen(true);
            setMoves(moves + 1);
            setLink([...link, {url, index}]);
        }
    }

    useEffect(() => {
        if (link.length === 2) {
            const [firstCard, secondCard] = link;
            if (firstCard.url !== secondCard.url) {
                setTimeout(() => {
                    setIsOpen(false);
                    setLink([]);
                    setMoves(0);
                    setAllMoves(allMoves + 1);
                }, 1000);
            } else {
                setLink([]);
                setMoves(0);
                setAllMoves(allMoves + 1);
            }
        }
    }, [link]);

    return (
        <div id={index} className={`card ${isOpen ? 'open' : ''}`} style={{ width: setting_size.width }} onClick={handleClick}>
            <img src="./images/card.png" alt="" className={isOpen ? 'back' : 'front'} />
            <img src={url} alt="" className={isOpen ? 'front' : 'back'} />
        </div>
    );
}