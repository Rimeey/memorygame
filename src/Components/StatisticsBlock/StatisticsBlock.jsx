import './statisticsblock.scss';
import { useContext, useEffect } from 'react';
import { Memory } from '../../Context';
import useTimer from '../../Hooks/useTimer';

export default function StatisticsBlock() {

    const { moves, play } = useContext(Memory);

    const {timer, setTimer, clear_timer } = useTimer();

    useEffect(() => {
        if (play) {
            const seconds = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
            return () => {
                clearInterval(seconds);
            };
        } else {
            setTimer(0);
        }
    }, [play, setTimer])

    return (
        <div className="statistics">
            <div className="elements">
                <div className="moves">Moves: {moves}</div>
                <div className="timer">{clear_timer(timer)}</div>
            </div>
        </div>
    );
}  