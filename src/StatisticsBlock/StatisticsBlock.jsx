import './statisticsblock.scss';
import { useContext } from 'react';
import { Memory } from '../Context';

export default function StatisticsBlock() {
    const { timer, clear_timer, moves } = useContext(Memory);

    return (
        <div className="statistics">
            <div className="elements">
                <div className="moves">Moves: {moves}</div>
                <div className="timer">{clear_timer(timer)}</div>
            </div>
        </div>
    );
}  