import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.scss';
import { faClose, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UseCase from '../../assets/images/projects/Grolleau_Virginie_1_diagramme_cas_usage_102022.pdf';
import UserStories from '../../assets/images/projects/Grolleau_Virginie_2_user_stories_102022.pdf';
import Wireframes from '../../assets/images/projects/Grolleau_Virginie_3_maquettes_102022.pdf';
import TestViews from '../../assets/images/projects/Grolleau_Virginie_2_rapport_test_views_092022.png';
import TestContainer from '../../assets/images/projects/Grolleau_Virginie_3_rapport_test_containers_092022.png';
import TestJest from '../../assets/images/projects/Grolleau_Virginie_4_rapport_couverture_092022.png';
import EndToEnd from '../../assets/images/projects/Grolleau_Virginie_5_plan_test_092022.pdf';

/**
 * Modal component displays project details in a modal.
 * @param {object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open or not.
 * @param {object} props.selectedData - Selected project data.
 * @param {function} props.onClose - Function to close the modal.
 */
const Modal = ({ isOpen, selectedData, onClose }) => {
    const { t } = useTranslation();
    const { data, category } = selectedData;

    // Convert category names for better readability
    let categoryName = category;
    switch (categoryName) {
        case "personal":
            categoryName = t('modal.personal');
            break;
        case "openclassrooms":
            categoryName = "OpenClassrooms";
            break;
        default:
            break;
    }

    // Extract data
    const { skills, description } = data;
    const { text, li } = description;

    // Check if all fields in the object are empty
    const areAllFieldsEmpty = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                if (!areAllFieldsEmpty(obj[key])) {
                    return false;
                }
            } else {
                if (obj[key] !== '') {
                    return false;
                }
            }
        }
        return true;
    };

    return (
        <div className='modal-wrapper'>
            <div className={`modal ${isOpen ? 'open' : ''}`}>
                <button onClick={onClose} className='close-button'>
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <div className='modal-top'>
                    <img src={require(`../../${data.imageURL}`)} alt={`Projet ${data.name}`} />
                    <div className='modal-top-left'>
                        <h2>{data.name}</h2>
                        <div className='modal-category'>
                            <h3>{t('modal.category')}</h3>
                            <p>{categoryName}</p>
                        </div>
                        <div className='modal-skills'>
                            <h3>{t('modal.skills')}</h3>
                            <ul>
                                {
                                    data.name === "Learn@Home" ?
                                        skills.map((skill, index) => {
                                            switch (index) {
                                                case 0:
                                                    return (
                                                        <li key={index}>
                                                            <a rel='noreferrer' target="_blank" href={UseCase}>{skill}</a>
                                                        </li>
                                                    )
                                                case 1:
                                                    return (
                                                        <li key={index}>
                                                            <a rel='noreferrer' target="_blank" href={UserStories}>{skill}</a>
                                                        </li>
                                                    )
                                                case 2:
                                                    return (
                                                        <li key={index}>
                                                            <a rel='noreferrer' target="_blank" href={Wireframes}>{skill}</a>
                                                        </li>
                                                    )
                                                case 3:
                                                    return (
                                                        <li key={index}>
                                                            <a rel='noreferrer' target="_blank" href='https://trello.com/b/5qJxWpiG/dev4u-projet-learnhome'>{skill}</a>
                                                        </li>
                                                    )
                                                default:
                                                    return (
                                                        <li key={index}>{skill}</li>
                                                    )
                                            }
                                        })
                                        :
                                        data.name === "Billed" ?
                                            skills.map((skill, index) => {
                                                switch (index) {
                                                    case 0:
                                                        return (
                                                            <li key={index}>
                                                                <a rel='noreferrer' target="_blank" href={TestContainer}>{skill}</a>
                                                            </li>
                                                        )
                                                    case 1:
                                                        return (
                                                            <li key={index}>
                                                                <a rel='noreferrer' target="_blank" href={TestViews}>{skill}</a>
                                                            </li>
                                                        )
                                                    case 2:
                                                        return (
                                                            <li key={index}>
                                                                <a rel='noreferrer' target="_blank" href={TestJest}>{skill}</a>
                                                            </li>
                                                        )
                                                    case 3:
                                                        return (
                                                            <li key={index}>
                                                                <a rel='noreferrer' target="_blank" href={EndToEnd}>{skill}</a>
                                                            </li>
                                                        )
                                                    default:
                                                        return (
                                                            <li key={index}>{skill}</li>
                                                        )
                                                }
                                            })
                                            :
                                            skills.map((skill, index) => (
                                                <li key={index}>{skill}</li>
                                            ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='modal-description'>
                    <p>{text}</p>
                    {li[0].content !== "" && (
                        <ul>
                            {li.map((item, index) => (
                                <li key={index}>
                                    {item.content}
                                    {item.sublevel.length !== 0 && (
                                        <ul>
                                            {item.sublevel.map((subItem, subIndex) => (
                                                <li key={subIndex} className='sublevel'>{subItem}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {!areAllFieldsEmpty(data.links) && (
                    <div className='modal-links'>
                        <h3>{t('modal.links')}</h3>
                        <div className='links'>
                            {Object.values(data.links).map((link, index) => (
                                Object.values(link).map((linkItem, innerIndex) => (
                                    linkItem.url !== "" && (
                                        <Link key={`${index}-${innerIndex}`} to={linkItem.url}>
                                            <FontAwesomeIcon icon={linkItem.icon === 'github' ? faGithub : faLink} /> {linkItem.text}
                                        </Link>
                                    )
                                ))
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// PropTypes
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    selectedData: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;