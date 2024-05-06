import Loader from 'react-loaders';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import cv from '../../assets/documents/cv-grolleau-virginie-alternance.pdf';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['C', 'o', 'm', 'p', 'é', 't', 'e', 'n', 'c', 'e', 's', ' ', '&', ' ', 'E', 'x', 'p', 'é', 'r', 'i', 'e', 'n', 'c', 'e', 's'];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3600)
    }, []);

    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                    </h1>
                    <p>
                        Experte en développement Front-End, y compris des technologies telles que
                        <span class="tech-tag">HTML5</span>,
                        <span class="tech-tag">CSS3</span>,
                        <span class="tech-tag">JavaScript</span>,
                        <span class="tech-tag">React</span>,
                        <span class="tech-tag">Redux</span>,
                        <span class="tech-tag">Jest</span>,
                        <span class="tech-tag">Tailwind CSS</span>,
                        <span class="tech-tag">Sass</span>,
                        <span class="tech-tag">Docker</span>,
                        <span class="tech-tag">Git</span>, etc.
                    </p>
                    <p>
                        Je ne suis pas designer, mais j'ai un bon sens de l'esthétique et de l'expérience dans la conception de sites web responsive et mobile first. Je m'efforce d'optimiser mon code et de fournir la meilleure expérience utilisateur possible, grâce notamment à l'accessibilité. Je serais ravie de vous apporter tout type de soutien, même après l'achèvement du projet. Je vous garantis un engagement pendant le travail sur votre projet.
                    </p>
                    <p>
                        Visitez mon profil <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/virginie-grolleau-/">LinkedIn</a> pour plus de détails. Vous pouvez également consulter mon CV en suivant ce <a rel='noreferrer' target="_blank" href={cv}>lien</a>.
                    </p>
                </div>
                <div className='skills-charts'></div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills;