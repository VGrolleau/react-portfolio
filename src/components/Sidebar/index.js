import { Link } from 'react-router-dom';
import './index.scss';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <svg width="250" height="290" xmlns="http://www.w3.org/2000/svg" className='img'>
                    <text x="4" y="38" fontFamily="Coolvetica" fontSize="50" fill="#ffd700" className='text-v'>V</text>
                    <text x="6" y="35" fontFamily="Coolvetica" fontSize="50" fill="#115173" className='text-v'>V</text>

                    <text x="6" y="55" fontFamily="Coolvetica" fontSize="12" fill="white" stroke="none" className='text-virginie'>Virginie</text>
                </svg>
            </Link>
        </div>
    )
};

export default Sidebar;