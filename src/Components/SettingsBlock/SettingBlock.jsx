import './settingsblock.scss';
import { useContext } from 'react';
import { Memory } from '../../Context';

export default function SettingsBlock() {

    const { handle_click_size, handle_click_sound, handle_click_speed} = useContext(Memory);

    return (
        <div className="settings">
            <div className="settings_element">
                <h2>Size: </h2>
                <div className="setting button dark" onClick={(e) => handle_click_size(e)}>4x3</div>
                <div className="setting button" onClick={(e) => handle_click_size(e)}>4x4</div>
                <div className="setting button" onClick={(e) => handle_click_size(e)}>5x4</div>
                <div className="setting button" onClick={(e) => handle_click_size(e)}>6x5</div>
                <div className="setting button" onClick={(e) => handle_click_size(e)}>6x6</div>
            </div>
            <div className="settings_element">
                <h2>Sound: </h2>
                <div className="setting button dark" onClick={(e) => handle_click_sound(e)}>On</div>
                <div className="setting button" onClick={(e) => handle_click_sound(e)}>Off</div>
            </div>
            <div className="settings_element">
                <h2>Speed: </h2>
                <div className="setting button dark" onClick={(e) => handle_click_speed(e)}>Fast</div>
                <div className="setting button" onClick={(e) => handle_click_speed(e)}>Standart</div>
                <div className="setting button" onClick={(e) => handle_click_speed(e)}>Slow</div>
            </div>
            <div className="settings_element">
                <h2>Design: </h2>
                <div className="setting button dark">Dark</div>
                <div className="setting button">Light</div>
            </div>
        </div>
    );
}  