import './Skills.scss';
import { useEffect, useState } from 'react';
import cv from '../../assets/documents/cv-grolleau-virginie-alternance.pdf';
import { dataTechTags } from '../../data';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import WordCloud from '../../components/WordCloud/WordCloud';

const Skills = () => {
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['C', 'o', 'm', 'p', 'é', 't', 'e', 'n', 'c', 'e', 's', ' ', '&', ' ', 'E', 'x', 'p', 'é', 'r', 'i', 'e', 'n', 'c', 'e', 's'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 6100)
    }, []);

    return (
        <>
            {showContent && (
                <div className='container skills-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                        </h1>
                        <p>
                            Experte en développement Front-End, y compris des technologies telles que
                            {
                                dataTechTags.map((data, index) => {
                                    return (<span className="tech-tag" key={index}>{data.name},</span>)
                                })
                            } etc.
                        </p>
                        <p>
                            Je ne suis pas designer, mais j'ai un bon sens de l'esthétique et de l'expérience dans la conception de sites web responsive et mobile first. Je m'efforce d'optimiser mon code et de fournir la meilleure expérience utilisateur possible, grâce notamment à l'accessibilité. Je serais ravie de vous apporter tout type de soutien, même après l'achèvement du projet. Je vous garantis un engagement pendant le travail sur votre projet.
                        </p>
                        <p>
                            Visitez mon profil <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/virginie-grolleau-/">LinkedIn</a> pour plus de détails. Vous pouvez également consulter mon CV en suivant ce <a rel='noreferrer' target="_blank" href={cv}>lien</a>.
                        </p>
                    </div>
                    <WordCloud />
                </div>
            )}
        </>
    )
}

export default Skills;