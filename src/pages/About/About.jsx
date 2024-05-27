import { useState } from 'react';
import './About.scss';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';

/**
 * Component for rendering the About page.
 */
const About = () => {
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['À', ' ', 'p', 'r', 'o', 'p', 'o', 's', ' ', 'd', 'e', ' ', 'm', 'o', 'i'];

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
                        <p>
                            Diplômée Développeuse d’Application JavaScript React via OpenClassrooms, je suis actuellement développeuse web freelance spécialisée en développement Front-End. Mon parcours atypique, allant du secteur sanitaire et social à des métiers manuels comme la menuiserie et la cuisine, m’a finalement conduit à ma véritable vocation : le développement web. Grâce à des formations solides, notamment auprès de l’ENI École Informatique et OpenClassrooms, j’ai acquis les compétences nécessaires pour créer des sites web et des applications performants et esthétiquement plaisants.
                        </p>
                        <p>
                            Ce qui me passionne le plus dans ce domaine, c’est de parvenir à un résultat à la fois fonctionnel et visuellement attrayant. Mon sens artistique, renforcé par mes compétences en dessin, me permet de concevoir des projets qui allient performance technique et design soigné. En tant que développeuse Front-End, je m’efforce de constamment me perfectionner pour offrir des solutions innovantes et efficaces à mes clients.
                        </p>
                        <p>
                            En tant que freelance, je suis disponible pour collaborer sur des projets variés, qu'il s'agisse de développement front-end, de conception d’applications web ou de création de contenus interactifs. Mon approche est centrée sur la satisfaction du client et l'atteinte d'un haut niveau d'excellence dans chaque projet.
                        </p>
                    </div>

                    <div className='stage-cube-cont'>
                        <div id='stars'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            </div>
                            <div className='face2'>
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            </div>
                            <div className='face3'>
                                <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
                            </div>
                            <div className='face4'>
                                <FontAwesomeIcon icon={faSass} color="#CF649A" />
                            </div>
                            <div className='face5'>
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            </div>
                            <div className='face6'>
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