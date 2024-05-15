import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';

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
            </div>
        </div>
    )
};

export default Modal;