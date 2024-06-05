import { Link } from 'react-router-dom';
import './Home.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import Logo from '../../components/Logo/Logo';
import { useTranslation } from 'react-i18next';

/**
 * Component for rendering the Home page.
 */
const Home = () => {
    const { t } = useTranslation();
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const hiArray = t('home.hi').split('');
    const iAmArray = t('home.iAm').split('');
    const nameArray = t('home.name').split('');
    const jobArray = t('home.job').split('');

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
            setLetterClass('text-animate-hover');
        }, 8500);
    }, []);

    return (
        <>
            {showContent && (
                <div className="container home-page">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={hiArray} index={10} />
                            <br />
                            <AnimatedLetters letterClass={letterClass} charactersArray={iAmArray} index={18} />
                            <svg xmlns="http://www.w3.org/2000/svg" className="img-home">
                                <text className='text-v-home'>V</text>
                                <text className='text-v-home'>V</text>
                            </svg>
                            <AnimatedLetters letterClass={letterClass} charactersArray={nameArray} index={25} />
                            <br />
                            <AnimatedLetters letterClass={letterClass} charactersArray={jobArray} index={33} />
                        </h1>
                        <h2>{t('home.subtitle')}</h2>
                        <Link to="/contact" className="flat-button">{t('home.contact')}</Link>
                    </div>
                    <Logo />
                </div>
            )}
        </>
    )
};

export default Home;