import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.scss';
import { faClose, faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Modal = ({ selectedData, onClose }) => {
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
            <div className='modal'>
                <button onClick={onClose} className='close-button'>
                    <FontAwesomeIcon icon={faClose} />
                </button>

                {/* <img src={require(`../../${data.imageURL}`)} alt='Image projet' /> */}

                <h2>{data.name}</h2>

                <div>
                    <div>
                        <h3>Catégorie</h3>
                        <p>{categoryName}</p>
                    </div>

                    <div>
                        <h3>Compétences</h3>
                        <ul>
                            {
                                skillsList.map((skill, index) =>
                                    <li key={index}>{skill}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                <div>
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
                                                                <li key={indexSub}>{liSub}</li>
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
                        <div>
                            <h3>Liens</h3>

                            <div>
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
        </div>
    )
};

export default Modal;