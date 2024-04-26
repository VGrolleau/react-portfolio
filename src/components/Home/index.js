import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Bonjour, <br /> Je suis
                    <svg xmlns="http://www.w3.org/2000/svg" className="img-home">
                        <text x="0" y="50" fontFamily="Coolvetica" fill="#ffd700" className='text-v-home'>V</text>
                        <text x="3" y="48" fontFamily="Coolvetica" fill="#115173" className='text-v-home'>V</text>
                    </svg>
                    irginie,
                    <br />
                    développeuse web alternante
                </h1>
                <h2>Développeuse Fullstack / Spécialisée ReactJS</h2>
                <Link to="/contact" className="flat-button">ME CONTACTER</Link>
            </div>
        </div>
    )
};

export default Home;