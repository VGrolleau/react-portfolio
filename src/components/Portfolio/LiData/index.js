import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LiData = (props) => {
    const { category, dataObject } = props;
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    }

    const handleMouseLeave = () => {
        setActiveIndex(null);
    }

    return dataObject.map((data, index) => (
        <li key={`${category}-${index + 1}`} id={`${category}-${index + 1}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={{ pathname: "/portfolio", state: data }}>
                <div className='project-row'>
                    <div className='project-row-left'>
                        <div className='project-selected-wrapper'>
                            {<FontAwesomeIcon icon={faLongArrowAltRight} className='project-selected' style={{ transition: 'transform .3s ease-in-out', transform: activeIndex === index ? 'translateX(0) translateZ(0)' : 'translateX(-100%) translateZ(0)' }} />}
                        </div>
                        <p style={{ transition: 'all .3s ease-in-out', paddingLeft: activeIndex === index ? '20px' : '0', fontWeight: activeIndex === index ? 'bold' : 'initial' }}>{data.name}</p>
                    </div>
                    <div className='project-row-right'>
                        <p>{data.skills[0]}</p>
                    </div>
                </div>
            </Link>
        </li>
    ))
}

export default LiData;