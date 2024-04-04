import './settingsblock.scss';
import { useContext } from 'react';
import { Memory } from '../Context';

export default function SettingsBlock() {

    const {handle_click_size} = useContext(Memory);

    return (
        <div className="settings">
            <div className="playgroundsize">
                <div className="size_playground button button-light" onClick={(e) => handle_click_size(e)}>4x3</div>
                <div className="size_playground button" onClick={(e) => handle_click_size(e)}>4x4</div>
                <div className="size_playground button" onClick={(e) => handle_click_size(e)}>5x4</div>
                <div className="size_playground button" onClick={(e) => handle_click_size(e)}>6x5</div>
                <div className="size_playground button" onClick={(e) => handle_click_size(e)}>6x6</div>
            </div>
            <div className="design">
                <div className="color button button-light">Dark</div>
                <div className="color button">Light</div>
            </div>
        </div>
    );
}  