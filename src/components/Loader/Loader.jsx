import './Loader.scss';

const Loader = () => {
    return (
        <div className='preloader'>
            <div className='inner'>
                <svg xmlns="http://www.w3.org/2000/svg" className='img'>
                    <text x="12" y="42" fontFamily="Coolvetica" fontSize="60" fill="#ffd700" className='text-v'>V</text>
                    <text x="14" y="39" fontFamily="Coolvetica" fontSize="60" fill="#115173" className='text-v'>V</text>

                    <text x="3" y="60" fontFamily="Coolvetica" fontSize="18" fill="white" stroke="none" className='text-virginie'>Virginie</text>
                </svg>
                <span>Travail en cours</span>
                <div className='progress-bar'>
                    <div className='progress-bar_bg'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Loader;