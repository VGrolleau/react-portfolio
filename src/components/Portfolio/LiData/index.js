import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LiData = (props) => {
    const { dataObject } = props;

    return dataObject.map((data, index) => (
        <li key={index}>
            <Link to={{ pathname: "/portfolio", state: data }}>
                <div className='project-row'>
                    <div className='project-row-left'>
                        <div className='project-selected-wrapper'>
                            {<FontAwesomeIcon icon={faLongArrowAltRight} className='project-selected' style={{ transform: 'translateX(-100 %) translateZ(0px)' }} />}
                        </div>
                        <p>{data.name}</p>
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