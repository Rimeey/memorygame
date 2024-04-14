import './playgroundblock.scss';
import StartgameBlock from '../StartgameBlock/StartgameBlock.jsx';
import PlaygroundCards from './PlaygroundCards.jsx';
import { useContext } from 'react';
import { Memory } from '../../Context.js';

export default function PlaygroundBlock() {

    const { setting_size } = useContext(Memory);

    return (
        <div className='playground'>
            <PlaygroundCards setting={setting_size.count}></PlaygroundCards>
            <StartgameBlock></StartgameBlock>
        </div>
    );
}
