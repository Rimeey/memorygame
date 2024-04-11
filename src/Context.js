import { createContext, useState } from "react";

export const Memory = createContext();

export const Context = ({ children }) => {

    const [play, setPlay] = useState(false);

    const [moves, setMoves] = useState(0);

    function increment_moves() {
        setMoves(moves => moves + 1);
        console.log(moves);
    }

    // Shuffle

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
            '4x3': { count: 12, width: '24.2%' },
            '4x4': { count: 16, width: '24.2%' },
            '5x4': { count: 20, width: '19.2%' },
            '6x5': { count: 30, width: '15.86%' },
            '6x6': { count: 36, width: '15.86%' }
        };

        const settings = buttonSettings[e.target.textContent];
        if (settings) {
            setSetting_size(settings);
            setPlay(false);
            setOverlay('block');
        }
    }

    // Overlay

    const [overlay, setOverlay] = useState('block');

    // Timer

    function handle_timer() {
        setOverlay('none')
        setPlay(true);
    }

    const value = {
        shuffleArray,
        handle_timer,
        increment_moves,
        handle_click_size, setting_size, setSetting_size,
        play, setPlay,
        overlay, setOverlay,
    };

    return (
        <Memory.Provider value={value}>{children}</Memory.Provider>
    )
}