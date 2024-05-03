import Loader from 'react-loaders';
import './index.scss';

const Skills = () => {
    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'></div>
                <div className='skills-charts'></div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills;