import { useTranslation } from 'react-i18next';
import './LanguageSelector.scss';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {i18n.language === 'fr' ? (
                <button onClick={() => changeLanguage('fr')}>FR</button>
            ) : (
                <button onClick={() => changeLanguage('en')}>EN</button>
            )}
        </>
    )
};

export default LanguageSelector;