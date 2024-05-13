import { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { dataProjects } from '../../data';
import LiData from './LiData';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['M', 'e', 's', ' ', 'p', 'r', 'o', 'j', 'e', 't', 's'];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    let dataPersonal = [];
    let dataOpenclassrooms = [];

    dataProjects.forEach(data => {
        dataPersonal.push(data.personal);
        dataOpenclassrooms.push(data.openclassrooms);
    });

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                    </h1>
                    <ul>
                        <LiData category="personal" dataObject={dataPersonal[0]} />
                        <LiData category="openclassrooms" dataObject={dataOpenclassrooms[0]} />
                    </ul>
                </div>
                <div className='project-overview'></div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Portfolio;