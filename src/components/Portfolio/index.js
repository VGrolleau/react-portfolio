import { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { dataProjects } from '../../data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

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

    function liData(dataObject) {
        return dataObject.map((data, index) => (
            <li key={index}>
                <Link to="/portfolio">
                    <div className='project-row'>
                        <div className='project-row-left'>
                            <div className='project-selected-wrapper'>
                                {<FontAwesomeIcon icon={faLongArrowAltRight} className='project-selected' />}
                            </div>
                            <p>{data.name}</p>
                        </div>
                        <div className='project-row-right'>
                            <p>{data.skills[0]}</p>
                        </div>
                    </div>
                </Link>
            </li>
        ))
    }

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                    </h1>
                    <ul>
                        {liData(dataPersonal[0])}
                        {liData(dataOpenclassrooms[0])}
                    </ul>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Portfolio;