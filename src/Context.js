import { createContext, useState } from "react";

export const Memory = createContext();

export const Context = ({ children }) => {

    const [setting_size, setSetting_size] = useState({count: 12, width: "24%"});

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function button_style(button) {
        for (const child of button.parentNode.childNodes) {
            child.classList.remove('button-light');
        }
        button.classList.add('button-light');
    }

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
        }
    }

    const value = { shuffleArray, handle_click_size, setting_size, setSetting_size };

    return (
        <Memory.Provider value={value}>{children}</Memory.Provider>
    )
}