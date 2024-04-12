import { createContext, useState } from "react";

export const Memory = createContext();

export const Context = ({ children }) => {

    const [play, setPlay] = useState(false);

    // URLS

    const [link, setLink] = useState({});

    // Moves

    const [moves, setMoves] = useState(0);

    const [allMoves, setAllMoves] = useState(0);

    // Click buttons

    function button_style(button) {
        for (const child of button.parentNode.childNodes) {
            child.classList.remove('button-light');
        }
        button.classList.add('button-light');
    }

    // Setting size

    const [setting_size, setSetting_size] = useState({ count: 6, width: "24.2%" });

    function handle_click_size(e) {
        button_style(e.target);

        const buttonSettings = {
            '4x3': { count: 6, width: '24.2%' },
            '4x4': { count: 8, width: '24.2%' },
            '5x4': { count: 10, width: '19.2%' },
            '6x5': { count: 15, width: '15.86%' },
            '6x6': { count: 18, width: '15.86%' }
        };

        const settings = buttonSettings[e.target.textContent];
        if (settings) {
            setSetting_size(settings);
            setPlay(false);
            setOverlay('block');
            setAllMoves(0);
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
        // shuffleArray,
        handle_timer,
        handle_click_size, setting_size, setSetting_size,
        play, setPlay,
        overlay, setOverlay,
        moves, setMoves,
        allMoves, setAllMoves,
        link, setLink
    };

    return (
        <Memory.Provider value={value}>{children}</Memory.Provider>
    )
}