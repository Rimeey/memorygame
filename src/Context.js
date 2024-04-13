import { createContext, useState } from "react";

export const Memory = createContext();

export const Context = ({ children }) => {

    const [play, setPlay] = useState(false);

    // URLS

    const [link, setLink] = useState([]);

    // Moves

    const [moves, setMoves] = useState(0);

    const [allMoves, setAllMoves] = useState(0);

    // Click buttons

    function button_style(button) {
        for (const child of button.parentNode.childNodes) {
            child.classList.remove('dark');
        }
        button.classList.add('dark');
    }

    // Settings

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
            to_default();
        }
    }

    const [setting_sound, setSetting_sound] = useState(true);

    function handle_click_sound(e) {
        button_style(e.target);
        if(e.target.textContent === 'ON') {
            setSetting_sound(true);
        } else {
            setSetting_sound(false);
        }
    }

    // Overlay

    const [overlay, setOverlay] = useState('block');

    function to_default() {
        setPlay(false);
        setOverlay('block');
        setOpenedCards([]);
        setAllMoves(0);
    }

    // Timer

    function handle_timer() {
        setOverlay('none')
        setPlay(true);
        setAllMoves(0);
    }

    // Opened cards

    const [openedCards, setOpenedCards] = useState([]);

    // sounds

    function play_sound(text) {
        if(setting_sound) {
            const sound = new Audio(`./sounds/${text}.mp3`);
            sound.volume = 0.1;
            sound.play();
        }
    }

    const value = {
        to_default,
        handle_timer,
        play_sound,
        handle_click_size, setting_size, setSetting_size,
        setting_sound, setSetting_sound, handle_click_sound,
        play, setPlay,
        overlay, setOverlay,
        moves, setMoves,
        allMoves, setAllMoves,
        link, setLink,
        openedCards, setOpenedCards
    };

    return (
        <Memory.Provider value={value}>{children}</Memory.Provider>
    )
}