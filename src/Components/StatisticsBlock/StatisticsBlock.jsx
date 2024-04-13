import './statisticsblock.scss';
import { useContext, useEffect } from 'react';
import { Memory } from '../../Context';
import useTimer from '../../Hooks/useTimer';
import { IoIosTimer } from "react-icons/io";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";

export default function StatisticsBlock() {

    const { allMoves, play } = useContext(Memory);

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
                <div className="element"><PiArrowsCounterClockwiseBold />Turns: {allMoves}</div>
                <div className="element"><IoIosTimer/>{clear_timer(timer)}</div>
            </div>
        </div>
    );
}  