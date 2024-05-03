import Loader from 'react-loaders';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['C', 'o', 'm', 'p', 'é', 't', 'e', 'n', 'c', 'e', 's', ' ', '&', ' ', 'E', 'x', 'p', 'é', 'r', 'i', 'e', 'n', 'c', 'e', 's'];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3600)
    }, []);

    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                    </h1>
                </div>
                <div className='skills-charts'></div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills;