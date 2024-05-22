import './Hamburger.scss';

const Hamburger = ({ isOpen }) => {
    return (
        <div className='hamburger'>
            <div className={`burger ${isOpen ? 'burger1-open' : 'burger1-close'}`} />
            <div className={`burger ${isOpen ? 'burger2-open' : 'burger2-close'}`} />
            <div className={`burger ${isOpen ? 'burger3-open' : 'burger3-close'}`} />
        </div>
    )
};

export default Hamburger;