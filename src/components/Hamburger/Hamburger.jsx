import PropTypes from 'prop-types';
import './Hamburger.scss';

/**
 * Hamburger component renders a hamburger menu with open/close animation.
 * @param {Object} props - Props passed to the component.
 * @param {boolean} props.isOpen - Boolean indicating if the hamburger menu is open.
 */
const Hamburger = ({ isOpen }) => {
    return (
        <div className='hamburger'>
            <div className={`burger ${isOpen ? 'burger1-open' : 'burger1-close'}`} data-testid="burger1" />
            <div className={`burger ${isOpen ? 'burger2-open' : 'burger2-close'}`} data-testid="burger2" />
            <div className={`burger ${isOpen ? 'burger3-open' : 'burger3-close'}`} data-testid="burger3" />
        </div>
    );
};

Hamburger.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;