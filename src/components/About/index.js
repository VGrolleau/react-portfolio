import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['À', ' ', 'p', 'r', 'o', 'p', 'o', 's', ' ', 'd', 'e', ' ', 'm', 'o', 'i'];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                    </h1>
                    <p>
                        Diplômée Développeuse d’Application JavaScript React via la plateforme OpenClassrooms, je cherche une entreprise qui pourra m’accueillir en alternance soit pour la formation Développeuse Full-Stack Java Angular toujours avec OpenClassrooms, soit pour la formation Conceptrice Développeuse d’Application avec ARINFO Niort.
                    </p>
                    <p>
                        Après des études dans le sanitaire et social, puis une réorientation vers des métiers manuels (tels que la menuiserie et la cuisine en restauration), je peux aujourd’hui affirmer que je suis une développeuse web (diplômée auprès de l’ENI École Informatique) qui s’est spécialisée en React (auprès d’OpenClassrooms). Cela a été possible grâce à la validation des certificats et diplômes qui m’ont donné les clés pour le développement de sites, d’applications ou encore de jeux vidéos.
                    </p>
                    <p>
                        Ce qui me passionne le plus dans le développement web et applicatif, c’est de parvenir à un résultat autant satisfaisant dans la fonctionnalité que dans l’esthétique (attrait dérivé de mon appétence et mes compétences en dessin). Mon objectif est de continuer à me perfectionner et être le plus efficiente possible via la formation sur laquelle je souhaite poursuivre en alternance.
                    </p>
                </div>

                <div className='stage-cube-cont'>
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

            <Loader type="pacman" />

            {/* <div className='preloader' style={{ display: 'none', transform: 'translate(100 %, 0 %) matrix(1, 0, 0, 1, 0, 0)' }}>
                <div className="inner">
                    <img src="../../assets/images/logopreload.svg" alt="JavaScript Developer Loader, Web Developer Loader , Front End Developer Loader" />
                    <span>Slobodan is working</span>
                    <div className="progress-bar">
                        <div className="progress-bar_bg">
                            <div style={{ width: 0 }}></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default About;