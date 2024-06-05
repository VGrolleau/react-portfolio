import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledHome = styled(NavLink)`
        &.home-link::after {
                content: "${props => props.aftertext}";
        }
    `;

const StyledAbout = styled(NavLink)`
        &.about-link::after {
                content: "${props => props.aftertext}";
        }
    `;

const StyledSkills = styled(NavLink)`
        &.skills-link::after {
                content: "${props => props.aftertext}";
        }
    `;

const StyledProjects = styled(NavLink)`
        &.portfolio-link::after {
                content: "${props => props.aftertext}";
        }
    `;

const StyledContact = styled(NavLink)`
        &.contact-link::after {
                content: "${props => props.aftertext}";
        }
    `;

/**
 * Sidebar component displays navigation links and social media icons.
 */
const Sidebar = () => {
    const { t } = useTranslation();
    const afterHome = t('sidebar.home');
    const afterAbout = t('sidebar.about');
    const afterSkills = t('sidebar.skills');
    const afterProjects = t('sidebar.projects');
    const afterContact = t('sidebar.contact');

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
                <StyledHome exact="true" activeclassname="active" className="home-link" to="/" aria-label={t('sidebar.home')} aftertext={afterHome}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </StyledHome>
                <StyledAbout exact="true" activeclassname="active" className="about-link" to="/about" aria-label={t('sidebar.about')} aftertext={afterAbout}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </StyledAbout>
                <StyledSkills exact="true" activeclassname="active" className="skills-link" to="/skills" aria-label={t('sidebar.skills')} aftertext={afterSkills}>
                    <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                </StyledSkills>
                <StyledProjects exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" aria-label={t('sidebar.projects')} aftertext={afterProjects}>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </StyledProjects>
                <StyledContact exact="true" activeclassname="active" className="contact-link" to="/contact" aria-label={t('sidebar.contact')} aftertext={afterContact}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </StyledContact>
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
                <li>
                    <LanguageSelector />
                </li>
            </ul>
            <div className='hamburger' onClick={toggleHamburger} data-testid="hamburger-button">
                <Hamburger isOpen={hamburgerOpen} />
            </div>
        </div>
    );
};

export default Sidebar;