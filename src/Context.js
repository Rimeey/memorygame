import { createContext, useState, useEffect } from "react";

export const Memory = createContext();

export const Context = ({ children }) => {

    const [play, setPlay] = useState(false);

    const [moves, setMoves] = useState(0);

    // Cards generate

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Click buttons

    function button_style(button) {
        for (const child of button.parentNode.childNodes) {
            child.classList.remove('button-light');
        }
        button.classList.add('button-light');
    }

    // Setting size

    const [setting_size, setSetting_size] = useState({ count: 12, width: "24%" });

    function handle_click_size(e) {
        button_style(e.target);

        const buttonSettings = {
            '4x3': { count: 12, width: '24%' },
            '4x4': { count: 16, width: '21%' },
            '5x4': { count: 20, width: '19%' },
            '6x5': { count: 30, width: '16%' },
            '6x6': { count: 36, width: '14%' }
        };

        const settings = buttonSettings[e.target.textContent];
        if (settings) {
            setSetting_size(settings);
            setPlay(false);
            setMoves(0);
            setTimer(0);
            setOverlay('block');
        }
    }

    // Overlay

    const [overlay, setOverlay] = useState('block');

    // Timer

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (play) {
            const seconds = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
            return () => {
                clearInterval(seconds);
            };
        }
    }, [play])

    const clear_timer = (seconds) => {
        const sign = seconds < 0 ? "-" : "";
        return sign + new Date(Math.abs(seconds) * 1000).toISOString().substr(11, 8);
    };

    function handle_timer() {
        setOverlay('none')
        setPlay(true);
    }

    const value = {
        shuffleArray,
        handle_click_size, setting_size, setSetting_size,
        timer, setTimer, clear_timer, handle_timer,
        moves, setMoves,
        play, setPlay,
        overlay, setOverlay
    };

    return (
        <Memory.Provider value={value}>{children}</Memory.Provider>
    )
}