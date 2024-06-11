import './Skills.scss';
import { useEffect, useState } from 'react';
import cvFr from '../../assets/documents/cv-grolleau-virginie.pdf';
import cvEn from '../../assets/documents/cv-grolleau-virginie-english.pdf';
import { dataTechTags } from '../../data';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import WordCloud from '../../components/WordCloud/WordCloud';
import { useTranslation } from 'react-i18next';

/**
 * Component for rendering the Skills page.
 */
const Skills = () => {
    const { t, i18n } = useTranslation();
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = t('skills.title').split('');

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

    // Map language keys to CV URLs
    const cvMapping = {
        fr: cvFr,
        en: cvEn
    };

    // Get the CV URL based on the current language
    const cvUrl = cvMapping[i18n.language];

    return (
        <>
            {showContent && (
                <div className='container skills-page'>
                    <div className='text-zone'>
                        {/* Title */}
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                        </h1>
                        {/* Description */}
                        <p>
                            {t('skills.firstParagraph')}
                            {
                                dataTechTags.map((data, index) => {
                                    return (<span className="tech-tag" key={index}>{data.name},</span>)
                                })
                            } etc.
                        </p>
                        <p>{t('skills.secondParagraph')}</p>
                        <p>
                            {t('skills.thirdParagraph')} <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/virginie-grolleau-/">{t('skills.linkedin')}</a> {t('skills.consult')} <a rel='noreferrer' target="_blank" href={cvUrl}>{t('skills.cv')}</a>.
                        </p>
                    </div>
                    {/* Render WordCloud component */}
                    <WordCloud />
                </div>
            )}
        </>
    );
}

export default Skills;