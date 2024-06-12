import { useEffect, useState } from 'react';
import './Portfolio.scss';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import LiData from '../../components/LiData/LiData';
import { useTranslation } from 'react-i18next';

/**
 * Component for rendering the Portfolio page.
 */
const Portfolio = () => {
    const { t } = useTranslation();
    const dataProjects = t('dataProjects', { returnObjects: true });

    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = t('projects.title').split('');
    const [activeLiIndex, setActiveLiIndex] = useState(null);
    const [animationKey, setAnimationKey] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('all');

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

    // Get the image URL for the active project
    const getImageUrl = () => {
        if (activeLiIndex !== null) {
            const [category, index] = activeLiIndex.split('-');
            const data = category === 'personal' ? dataProjects.personal[index] : dataProjects.openclassrooms[index];
            return data.imageURL;
        }
        return null;
    };

    // Handle category change
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setActiveLiIndex(null); // Reset active project when category changes
        setAnimationKey(prevKey => prevKey + 1); // Update key to trigger animation
    };

    return (
        <>
            {showContent && (
                <div className='container portfolio-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                        </h1>
                        <div className='category-selector'>
                            <label htmlFor='category'>{t('projects.selectCategory')}</label>
                            <select id='category' value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="all">{t('projects.all')} ({dataProjects.personal.length + dataProjects.openclassrooms.length})</option>
                                <option value="personal">{t('projects.personal')} ({dataProjects.personal.length})</option>
                                <option value="openclassrooms">{t('projects.openclassrooms')} ({dataProjects.openclassrooms.length})</option>
                            </select>
                        </div>
                        <ul>
                            {/* Render personal projects */}
                            {(selectedCategory === 'all' || selectedCategory === 'personal') && (
                                <LiData
                                    category="personal"
                                    dataObject={dataProjects.personal}
                                    activeLiIndex={activeLiIndex}
                                    setActiveLiIndex={setActiveLiIndex}
                                    setAnimationKey={setAnimationKey}
                                />
                            )}
                            {/* Render openclassrooms projects */}
                            {(selectedCategory === 'all' || selectedCategory === 'openclassrooms') && (
                                <LiData
                                    category="openclassrooms"
                                    dataObject={dataProjects.openclassrooms}
                                    activeLiIndex={activeLiIndex}
                                    setActiveLiIndex={setActiveLiIndex}
                                    setAnimationKey={setAnimationKey}
                                />
                            )}
                        </ul>
                    </div>
                    <div className="project-overview">
                        {/* Render project overview image */}
                        {getImageUrl() && <img key={animationKey} data-testid="project-overview" className='overview' src={require(`../../${getImageUrl()}`)} alt='Project Overview' />}
                    </div>
                </div>
            )}
        </>
    );
};

export default Portfolio;