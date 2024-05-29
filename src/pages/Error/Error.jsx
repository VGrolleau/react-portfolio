import { useEffect, useState } from 'react';
import './Error.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';

const Error = () => {
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = [4, 0, 4];

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
        }, 5000);
    }, []);

    return (
        <>
            {showContent && (
                <div className="container error-page">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                        </h1>
                        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                        <Link to="/" className="flat-button">Retourner à la page d'accueil</Link>
                    </div>
                </div>
            )}
        </>
    )
};

export default Error;