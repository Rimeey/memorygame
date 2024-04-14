import { useContext, useEffect } from "react";
import { Memory } from "../../Context";

export default function OneCard({ url, index }) {
    const { setting_size, setting_speed, moves, setMoves, allMoves, setAllMoves, link, setLink, openedCards, setOpenedCards, to_default, play_sound } = useContext(Memory);

    const isOpen = openedCards.includes(index);

    function handleClick() {
        if (!isOpen && moves < 2) {
            setMoves(moves + 1);
            setLink([...link, { url, index }]);
            setOpenedCards([...openedCards, index]);
            if (openedCards.length === (setting_size.count * 2) - 1) {
                setTimeout(() => {
                    to_default();
                }, 1000);
            }
        }
    }

    useEffect(() => {

        function matched_cards() {
            if (link.length === 2) {
                const [firstCard, secondCard] = link;
                if (firstCard.url !== secondCard.url) {
                    setOpenedCards(openedCards.filter(cardIndex => ![firstCard.index, secondCard.index].includes(cardIndex)));
                    play_sound('no');
                } else {
                    play_sound('yes');
                }
                setLink([]);
            }
        }

        if (moves > 1) {
            setTimeout(() => {
                setMoves(0);
                setAllMoves(allMoves + 1);
                matched_cards()
            }, setting_speed);
        }
    }, [allMoves, setAllMoves, link, setLink, moves, setMoves, openedCards, setOpenedCards, setting_speed]);

    return (
        <div id={index} className={`card ${isOpen ? 'open' : ''}`} style={{ width: setting_size.width }} onClick={handleClick}>
            <img src="./images/card.png" alt="" className={isOpen ? 'back' : 'front'} />
            <img src={url} alt="" className={isOpen ? 'front' : 'back'} />
        </div>
    );
}
