import './playgroundblock.scss';
import OneCard from './OneCard.jsx';
import allPics from '../../AllPic.js';

export default function PlaygroundCards({ setting }) {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const unuqieImages = shuffleArray(allPics).slice(0, (setting / 2));
    const shuffledImages = shuffleArray(unuqieImages.flatMap(image => [image, image]));

    return (
        <div className='cards'>
            {shuffledImages.slice(0, setting).map((imageUrl, index) => (
                <OneCard url={imageUrl} key={index} />
            ))}
        </div>
    );
}