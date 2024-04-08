import './playgroundblock.scss';
import OneCard from './OneCard';
import allPics from '../AllPic';
import { useContext } from 'react';
import { Memory } from '../Context.js';
import StartgameBlock from '../StartgameBlock/StartgameBlock.jsx';

export default function PlaygroundBlock() {

    const { shuffleArray, setting_size } = useContext(Memory);

    const shuffledImages = shuffleArray(shuffleArray(allPics).flatMap(image => [image, image]));

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