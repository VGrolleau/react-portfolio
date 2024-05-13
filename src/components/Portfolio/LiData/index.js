import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LiData = (props) => {
    const { category, dataObject, activeLiIndex, setActiveLiIndex } = props;

    const handleMouseEnter = (category, index) => {
        setActiveLiIndex(`${category}-${index}`);
    }

    const handleMouseLeave = () => {
        setActiveLiIndex(null);
    }

    return dataObject.map((data, index) => (
        <li
            key={`${category}-${index + 1}`}
            id={`${category}-${index + 1}`}
            onMouseEnter={() => handleMouseEnter(category, index)}
            onMouseLeave={handleMouseLeave}
            className={activeLiIndex === `${category}-${index}` ? 'active' : ''}
        >
            <Link to={{ pathname: "/portfolio", state: data }}>
                <div className='project-row'>
                    <div className='project-row-left'>
                        <div className='project-selected-wrapper'>
                            {
                                <FontAwesomeIcon
                                    icon={faLongArrowAltRight}
                                    className='project-selected'
                                    style={{
                                        transition: 'transform .3s ease-in-out',
                                        transform: activeLiIndex === `${category}-${index}` ? 'translateX(0) translateZ(0)' : 'translateX(-100%) translateZ(0)'
                                    }}
                                />
                            }
                        </div>
                        <p style={{
                            transition: 'all .3s ease-in-out',
                            paddingLeft: activeLiIndex === `${category}-${index}` ? '20px' : '0',
                            fontWeight: activeLiIndex === `${category}-${index}` ? 'bold' : 'initial'
                        }}>
                            {data.name}
                        </p>
                    </div>
                    <div className='project-row-right'>
                        <p>{data.skills[0]}</p>
                    </div>
                </div>
            </Link>
        </li >
    ))
}

export default LiData;