import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.scss';
import { faClose, faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Modal = ({ isOpen, selectedData, onClose }) => {
    const { data, category } = selectedData;

    let categoryName = category;
    switch (categoryName) {
        case "personal":
            categoryName = "personnel";
            break;

        case "openclassrooms":
            categoryName = "OpenClassrooms";
            break;

        default:
            break;
    }

    let skillsList = data.skills;

    let descriptionText = data.description.text;
    let descriptionLi = data.description.li;

    let linksGithub = data.links.github;
    let linksSite = data.links.site;

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
                            <h3>Catégorie</h3>
                            <p>{categoryName}</p>
                        </div>

                        <div className='modal-skills'>
                            <h3>Compétences</h3>
                            <ul>
                                {
                                    skillsList.map((skill, index) =>
                                        data.name === "Learn@Home" ?
                                            <li key={index}>
                                                {
                                                    index === 0 ?
                                                        <Link to={require("../../assets/images/projects/Grolleau_Virginie_1_diagramme_cas_usage_102022.pdf")}>
                                                            {skill}
                                                        </Link> :
                                                        index === 1 ?
                                                            <Link to={require("../../assets/images/projects/Grolleau_Virginie_2_user_stories_102022.pdf")}>
                                                                {skill}
                                                            </Link> :
                                                            index === 2 ?
                                                                <Link to={require("../../assets/images/projects/Grolleau_Virginie_3_maquettes_102022.pdf")}>
                                                                    {skill}
                                                                </Link> :
                                                                index === 3 ?
                                                                    <Link to="https://trello.com/b/5qJxWpiG/dev4u-projet-learnhome">
                                                                        {skill}
                                                                    </Link> :
                                                                    null
                                                }
                                            </li>
                                            :
                                            <li key={index}>{skill}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='modal-description'>
                    <p>{descriptionText}</p>
                    {
                        descriptionLi[0].content !== "" ?
                            <ul>
                                {
                                    descriptionLi.map((li, index) =>
                                        <li key={index}>
                                            {li.content}
                                            {
                                                li.sublevel.length !== 0 ?
                                                    <ul>
                                                        {
                                                            li.sublevel.map((liSub, indexSub) =>
                                                                <li key={indexSub} className='sublevel'>{liSub}</li>
                                                            )
                                                        }
                                                    </ul>
                                                    :
                                                    null
                                            }
                                        </li>
                                    )
                                }
                            </ul>
                            :
                            null
                    }
                </div>

                {
                    areAllFieldsEmpty(linksGithub) && areAllFieldsEmpty(linksSite) ?
                        null
                        :
                        <div className='modal-links'>
                            <h3>Liens</h3>

                            <div className='links'>
                                {
                                    areAllFieldsEmpty(linksGithub) ?
                                        null
                                        :
                                        (
                                            <>
                                                {
                                                    linksGithub.frontend.url === "" ? null :
                                                        <Link to={linksGithub.frontend.url}>
                                                            <FontAwesomeIcon icon={faGithub} /> {linksGithub.frontend.text}
                                                        </Link>
                                                }
                                                {
                                                    linksGithub.backend.url === "" ? null :
                                                        <Link to={linksGithub.backend.url}>
                                                            <FontAwesomeIcon icon={faGithub} /> {linksGithub.backend.text}
                                                        </Link>
                                                }
                                                {
                                                    linksGithub.other.url === "" ? null :
                                                        <Link to={linksGithub.other.url}>
                                                            <FontAwesomeIcon icon={faGithub} /> {linksGithub.other.text}
                                                        </Link>
                                                }
                                            </>
                                        )
                                }
                                {
                                    areAllFieldsEmpty(linksSite) ?
                                        null
                                        :
                                        (
                                            <>
                                                {
                                                    linksSite.app.url === "" ? null :
                                                        <Link to={linksSite.app.url}>
                                                            <FontAwesomeIcon icon={faLink} /> {linksSite.app.text}
                                                        </Link>
                                                }
                                                {
                                                    linksSite.other.url === "" ? null :
                                                        <Link to={linksSite.other.url}>
                                                            <FontAwesomeIcon icon={faLink} /> {linksSite.other.text}
                                                        </Link>
                                                }
                                            </>
                                        )
                                }
                            </div>
                        </div>
                }
            </div>
        </div >
    )
};

export default Modal;