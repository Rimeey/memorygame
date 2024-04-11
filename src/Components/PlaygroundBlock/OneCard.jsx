import { useContext } from "react";
import { Memory } from "../../Context";
import useMoves from '../../Hooks/useMoves';

export default function OneCard({ url }) {
    const { setting_size } = useContext(Memory);
    const { isOpen, handle_click_open} = useMoves();

    return (
        <div className={`card ${isOpen ? 'open' : ''}`} style={{ width: setting_size.width }} onClick={handle_click_open}>
            <img src="./images/card.png" alt="" className={isOpen ? 'back' : 'front'}/>
            <img src={url} alt="" className={isOpen ? 'front' : 'back'}/>
        </div>
    );
}
