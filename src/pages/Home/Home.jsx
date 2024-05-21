import { Link } from 'react-router-dom';
import './Home.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import Logo from '../../components/Logo/Logo';

const Home = () => {
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const hiArray = ['B', 'o', 'n', 'j', 'o', 'u', 'r', ','];
    const iAmArray = ['J', 'e', ' ', 's', 'u', 'i', 's'];
    const nameArray = ['i', 'r', 'g', 'i', 'n', 'i', 'e', ','];
    const jobArray = ['d', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 's', 'e', ' ', 'w', 'e', 'b', ' ', 'a', 'l', 't', 'e', 'r', 'n', 'a', 'n', 't', 'e', '.'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 9500);
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
                                <text x="0" y="50" fontFamily="Coolvetica" fill="#ffd700" className='text-v-home'>V</text>
                                <text x="3" y="48" fontFamily="Coolvetica" fill="#115173" className='text-v-home'>V</text>
                            </svg>
                            <AnimatedLetters letterClass={letterClass} charactersArray={nameArray} index={25} />
                            <br />
                            <AnimatedLetters letterClass={letterClass} charactersArray={jobArray} index={33} />
                        </h1>
                        <h2>Développeuse Fullstack / Spécialisée ReactJS</h2>
                        <Link to="/contact" className="flat-button">Me contacter</Link>
                    </div>
                    <Logo />
                </div>
            )}
        </>
    )
};

export default Home;