import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LiData.scss';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

/**
 * LiData component renders a list item with animations and modal functionality.
 * @param {Object} props - Props passed to the component.
 * @param {string} props.category - The category of the data.
 * @param {Array} props.dataObject - Array of data objects to display.
 * @param {string} props.activeLiIndex - Currently active list item index.
 * @param {Function} props.setActiveLiIndex - Function to set the active list item index.
 * @param {Function} props.setAnimationKey - Function to set the animation key for re-rendering.
 */
const LiData = ({ category, dataObject, activeLiIndex, setActiveLiIndex, setAnimationKey }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    // Handle mouse enter event to set the active list item index and update animation key
    const handleMouseEnter = (category, index) => {
        setActiveLiIndex(`${category}-${index}`);
        setAnimationKey(prevKey => prevKey + 1);
    };

    // Handle mouse leave event to reset the active list item index
    const handleMouseLeave = () => {
        setActiveLiIndex(null);
    };

    // Handle list item click to open modal with selected data
    const handleLiClick = (e, data, category) => {
        e.stopPropagation();
        setSelectedData({ data, category });
        setIsModalOpen(true);
    };

    return (
        <>
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    selectedData={selectedData}
                    onClose={() => setIsModalOpen(false)}
                    data-testid='modal'
                />
            )}
            {dataObject.map((data, index) => (
                <li
                    key={`${category}-${index + 1}`}
                    id={`${category}-${index + 1}`}
                    onMouseEnter={() => handleMouseEnter(category, index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => handleLiClick(e, data, category)}
                    className={activeLiIndex === `${category}-${index}` ? 'active' : ''}
                >
                    <Link to={{ pathname: "/portfolio", state: { data } }}>
                        <div className='project-row'>
                            <div className='project-row-left'>
                                <div className='project-selected-wrapper'>
                                    <FontAwesomeIcon
                                        icon={faLongArrowAltRight}
                                        className='project-selected'
                                        style={{
                                            transition: 'transform .3s ease-in-out',
                                            transform: activeLiIndex === `${category}-${index}` ? 'translateX(0) translateZ(0)' : 'translateX(-100%) translateZ(0)',
                                        }}
                                    />
                                </div>
                                <p
                                    style={{
                                        transition: 'all .3s ease-in-out',
                                        paddingLeft: activeLiIndex === `${category}-${index}` ? '20px' : '0',
                                        fontWeight: activeLiIndex === `${category}-${index}` ? 'bold' : 'initial',
                                    }}
                                >
                                    {data.name}
                                </p>
                            </div>
                            <div className='project-row-right'>
                                <p>{data.skills[0]}</p>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </>
    );
};

LiData.propTypes = {
    category: PropTypes.string.isRequired,
    dataObject: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired
    })).isRequired,
    activeLiIndex: PropTypes.string,
    setActiveLiIndex: PropTypes.func.isRequired,
    setAnimationKey: PropTypes.func.isRequired
};

export default LiData;