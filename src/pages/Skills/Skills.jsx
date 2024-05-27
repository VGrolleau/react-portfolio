import './Skills.scss';
import { useEffect, useState } from 'react';
import cv from '../../assets/documents/cv-grolleau-virginie-alternance.pdf';
import { dataTechTags } from '../../data';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import WordCloud from '../../components/WordCloud/WordCloud';

/**
 * Component for rendering the Skills page.
 */
const Skills = () => {
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['S', 'a', 'v', 'o', 'i', 'r', 's', ' ', 'f', 'a', 'i', 'r', 'e'];

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
                <div className='container skills-page'>
                    <div className='text-zone'>
                        {/* Title */}
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                        </h1>
                        {/* Description */}
                        <p>
                            Spécialisée en développement Front-End, y compris des technologies telles que
                            {
                                dataTechTags.map((data, index) => {
                                    return (<span className="tech-tag" key={index}>{data.name},</span>)
                                })
                            } etc.
                        </p>
                        <p>
                            Avec un œil aiguisé pour l'esthétique et une solide expérience dans la conception de sites web responsive et mobile first, je crée des solutions qui allient beauté et fonctionnalité. Je mets un point d'honneur à optimiser mon code pour offrir la meilleure expérience utilisateur possible, en accordant une attention particulière à l'accessibilité. Je suis également disponible pour vous apporter un soutien continu même après l'achèvement du projet, assurant ainsi une collaboration réussie et durable. Mon engagement et ma passion pour le développement garantissent des résultats de qualité pour votre projet.
                        </p>
                        <p>
                            Pour plus de détails sur mon parcours et mes compétences, n'hésitez pas à visiter <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/virginie-grolleau-/">mon profil LinkedIn</a> ou à consulter <a rel='noreferrer' target="_blank" href={cv}>mon CV</a>.
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