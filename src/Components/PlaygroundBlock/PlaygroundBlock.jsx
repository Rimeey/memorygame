import './playgroundblock.scss';
import OneCard from './OneCard.jsx';
import allPics from '../../AllPic.js';
import { useContext } from 'react';
import { Memory } from '../../Context.js';
import StartgameBlock from '../StartgameBlock/StartgameBlock.jsx';

export default function PlaygroundBlock() {

    const { setting_size, shuffleArray } = useContext(Memory);

    const unuqieImages = shuffleArray(allPics).slice(0, (setting_size.count/2));
    const shuffledImages = shuffleArray(unuqieImages.flatMap(image => [image, image]));

    return (
        <div className='playground'>
            <div className='cards'>
                {shuffledImages.slice(0, setting_size.count).map((imageUrl, index) => (
                    <OneCard url={imageUrl} key={index}></OneCard>
                ))}
            </div>
            <StartgameBlock></StartgameBlock>
        </div>
    );
}