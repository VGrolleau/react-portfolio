import { useState } from 'react';
import './About.scss';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { useTranslation } from 'react-i18next';

/**
 * Component for rendering the About page.
 */
const About = () => {
    const { t } = useTranslation();
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = t('about.title').split('');
    // const titleArray = ['À', ' ', 'p', 'r', 'o', 'p', 'o', 's', ' ', 'd', 'e', ' ', 'm', 'o', 'i'];

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
            return setLetterClass('text-animate-hover')
        }, 5500);
    }, []);

    return (
        <>
            {showContent && (
                <div className='container about-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                        </h1>
                        <p>{t('about.firstParagraph')}</p>
                        <p>{t('about.secondParagraph')}</p>
                        <p>{t('about.thirdParagraph')}</p>
                    </div>

                    <div className='stage-cube-cont' data-testid='stage-cube-cont'>
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                        <div className='cubespinner'>
                            <div className='face1' data-testid='face1'>
                                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            </div>
                            <div className='face2' data-testid='face2'>
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            </div>
                            <div className='face3' data-testid='face3'>
                                <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
                            </div>
                            <div className='face4' data-testid='face4'>
                                <FontAwesomeIcon icon={faSass} color="#CF649A" />
                            </div>
                            <div className='face5' data-testid='face5'>
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            </div>
                            <div className='face6' data-testid='face6'>
                                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default About;