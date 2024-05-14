import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ selectedData, onClose }) => {
    const { data, category } = selectedData;

    let descriptionText = data.description.text;
    let descriptionLi = data.description.li;

    console.log(descriptionLi[0].content !== "");

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

    return (
        <div className='modal-wrapper'>
            <div className='modal'>
                <button onClick={onClose} className='close-button'>
                    <FontAwesomeIcon icon={faClose} />
                </button>

                {/* <img src={require(`../../${data.imageURL}`)} alt='Image projet' /> */}

                <h2>{data.name}</h2>

                <div>
                    <p>{descriptionText}</p>

                    {
                        descriptionLi.content !== "" ?
                            <ul>
                                <li>test</li>
                            </ul>
                            : null
                    }
                </div>

                <div>
                    <h3>Catégorie</h3>
                    <p>{categoryName}</p>
                </div>
            </div>
        </div>
    )
};

export default Modal;