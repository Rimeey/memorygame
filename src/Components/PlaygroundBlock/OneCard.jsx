import { useContext, useEffect } from "react";
import { Memory } from "../../Context";

export default function OneCard({ url, index }) {
    const { setting_size, moves, setMoves, allMoves, setAllMoves, link, setLink, openedCards, setOpenedCards } = useContext(Memory);

    const isOpen = openedCards.includes(index);

    function handleClick() {
        if (!isOpen && moves < 2) {
            setMoves(moves + 1);
            setLink([...link, { url, index }]);
            setOpenedCards([...openedCards, index]);
        }
    }

    useEffect(() => {
        if (moves > 1) {
            setTimeout(() => {
                setMoves(0);
                setAllMoves(allMoves + 1);
                if (link.length === 2) {
                    const [firstCard, secondCard] = link;
                    if (firstCard.url !== secondCard.url) {
                        setOpenedCards(openedCards.filter(cardIndex => ![firstCard.index, secondCard.index].includes(cardIndex)));
                    }
                    setLink([]);
                }
            }, 500);
        }
    }, [moves, allMoves, link, setMoves, setAllMoves, setLink, openedCards, setOpenedCards]);

    return (
        <div id={index} className={`card ${isOpen ? 'open' : ''}`} style={{ width: setting_size.width }} onClick={handleClick}>
            <img src="./images/card.png" alt="" className={isOpen ? 'back' : 'front'} />
            <img src={url} alt="" className={isOpen ? 'front' : 'back'} />
        </div>
    );
}
