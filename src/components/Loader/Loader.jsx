import { useTranslation } from 'react-i18next';
import './Loader.scss';

/**
 * The Loader component in JavaScript React displays a preloader with a progress bar and text
 * indicating "Travail en cours" or "Work in progress" depending on language.
 * @returns The Loader component is being returned. It is a functional component that renders a
 * preloader with a custom SVG animation and a progress bar.
 */
const Loader = () => {
    const { t } = useTranslation();
    return (
        <div className='preloader'>
            <div className='inner'>
                <svg xmlns="http://www.w3.org/2000/svg" className='img'>
                    <text x="12" y="42" fontFamily="Coolvetica" fontSize="60" fill="#ffd700" className='text-v'>V</text>
                    <text x="14" y="39" fontFamily="Coolvetica" fontSize="60" fill="#115173" className='text-v'>V</text>
                    <text x="3" y="60" fontFamily="Coolvetica" fontSize="18" fill="white" stroke="none" className='text-virginie'>Virginie</text>
                </svg>
                <span>{t('loader.work')}</span>
                <div className='progress-bar' data-testid='progress-bar'>
                    <div className='progress-bar_bg'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;