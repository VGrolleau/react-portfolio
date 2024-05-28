import { useEffect, useState } from 'react';
import './Portfolio.scss';
import { dataProjects } from '../../data';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import LiData from '../../components/LiData/LiData';

/**
 * Component for rendering the Portfolio page.
 */
const Portfolio = () => {
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['M', 'e', 's', ' ', 'p', 'r', 'o', 'j', 'e', 't', 's'];
    const [activeLiIndex, setActiveLiIndex] = useState(null);
    const [animationKey, setAnimationKey] = useState(0);

    // Show content after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    // Add animation class after a delay
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 5500);
    }, []);

    // Extract personal and openclassrooms project data
    let dataPersonal = [];
    let dataOpenclassrooms = [];
    dataProjects.forEach(data => {
        dataPersonal.push(data.personal);
        dataOpenclassrooms.push(data.openclassrooms);
    });

    // Get the image URL for the active project
    const getImageUrl = () => {
        if (activeLiIndex !== null) {
            const [category, index] = activeLiIndex.split('-');
            const data = category === 'personal' ? dataPersonal[0][index] : dataOpenclassrooms[0][index];
            return data.imageURL;
        }
        return null;
    };

    return (
        <>
            {showContent && (
                <div className='container portfolio-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                        </h1>
                        <ul>
                            {/* Render personal projects */}
                            <LiData
                                category="personal"
                                dataObject={dataPersonal[0]}
                                activeLiIndex={activeLiIndex}
                                setActiveLiIndex={setActiveLiIndex}
                                setAnimationKey={setAnimationKey}
                            />
                            {/* Render openclassrooms projects */}
                            <LiData
                                category="openclassrooms"
                                dataObject={dataOpenclassrooms[0]}
                                activeLiIndex={activeLiIndex}
                                setActiveLiIndex={setActiveLiIndex}
                                setAnimationKey={setAnimationKey}
                            />
                        </ul>
                    </div>
                    <div className="project-overview">
                        {/* Render project overview image */}
                        {getImageUrl() && <img key={animationKey} className='overview' src={require(`../../${getImageUrl()}`)} alt='Project Overview' />}
                    </div>
                </div>
            )}
        </>
    );
};

export default Portfolio;