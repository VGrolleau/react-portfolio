import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';

/**
 * Sidebar component displays navigation links and social media icons.
 */
const Sidebar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    /**
     * Toggles the state of the hamburger menu.
     */
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" className='img'>
                    <text className='text-v'>V</text>
                    <text className='text-v'>V</text>
                    <text className='text-virginie'>Virginie</text>
                </svg>
            </Link>
            <nav className={hamburgerOpen ? 'hamburger-open' : ''}>
                <NavLink exact activeClassName="active" to="/" aria-label="Accueil">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact activeClassName="active" className="about-link" to="/about" aria-label="À propos">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact activeClassName="active" className="skills-link" to="/skills" aria-label="Compétences">
                    <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                </NavLink>
                <NavLink exact activeClassName="active" className="portfolio-link" to="/portfolio" aria-label="Projets">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink exact activeClassName="active" className="contact-link" to="/contact" aria-label="Contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul className={hamburgerOpen ? 'hamburger-open' : ''}>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/virginie-grolleau-/' aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/VGrolleau' aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <div className='hamburger' onClick={toggleHamburger} data-testid="hamburger-button">
                <Hamburger isOpen={hamburgerOpen} />
            </div>
        </div>
    );
};

export default Sidebar;