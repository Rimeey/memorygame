import './startgameblock.scss';
import { useContext } from 'react';
import { Memory } from '../Context';

export default function StartgameBlock() {
    const { overlay, handle_timer } = useContext(Memory);
    return (
        <div className="overlay" style={{ display: overlay }}>
            <div className='start' onClick={() => handle_timer()}>START</div>
        </div>
    );
}