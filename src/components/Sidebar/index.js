import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <svg width="250" height="290" xmlns="http://www.w3.org/2000/svg" className='img'>
                    <text x="8" y="38" fontFamily="Coolvetica" fontSize="50" fill="#ffd700" className='text-v'>V</text>
                    <text x="10" y="35" fontFamily="Coolvetica" fontSize="50" fill="#115173" className='text-v'>V</text>

                    <text x="3" y="55" fontFamily="Coolvetica" fontSize="14" fill="white" stroke="none" className='text-virginie'>Virginie</text>
                </svg>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/virginie-grolleau-/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/VGrolleau'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;