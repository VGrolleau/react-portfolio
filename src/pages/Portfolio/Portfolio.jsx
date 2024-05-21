import { useEffect, useState } from 'react';
import './Portfolio.scss';
import { dataProjects } from '../../data';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import LiData from '../../components/LiData/LiData';

const Portfolio = () => {
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['M', 'e', 's', ' ', 'p', 'r', 'o', 'j', 'e', 't', 's'];
    const [activeLiIndex, setActiveLiIndex] = useState(null);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5500);
    }, []);

    let dataPersonal = [];
    let dataOpenclassrooms = [];

    dataProjects.forEach(data => {
        dataPersonal.push(data.personal);
        dataOpenclassrooms.push(data.openclassrooms);
    });

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
                            <LiData
                                category="personal"
                                dataObject={dataPersonal[0]}
                                activeLiIndex={activeLiIndex}
                                setActiveLiIndex={setActiveLiIndex}
                                setAnimationKey={setAnimationKey}
                            />
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
                        {
                            getImageUrl() && <img key={animationKey} className='overview' src={require(`../../${getImageUrl()}`)} alt='Aperçu projet' />
                        }
                    </div>
                </div>
            )}
        </>
    )
};

export default Portfolio;