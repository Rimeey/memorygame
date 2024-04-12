import React, { useEffect, useState } from 'react';
import './playgroundblock.scss';
import OneCard from './OneCard.jsx';
import allPics from '../../AllPic.js';

export default function PlaygroundCards({ setting }) {
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const uniqueImages = new Set(allPics);
        const shuffledArray = shuffleArray(Array.from(uniqueImages)).slice(0, setting);
        const doubledImages = shuffledArray.flatMap(image => [image, image]);
        setShuffledImages(shuffleArray(doubledImages));
    }, [setting]);

    return (
        <div className='cards'>
            {shuffledImages.map((imageUrl, index) => (
                <OneCard url={imageUrl} key={index} index={index} />
            ))}
        </div>
    );
}
