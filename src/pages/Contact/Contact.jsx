import './Contact.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { useTranslation } from 'react-i18next';

/**
 * Component for rendering the Contact page.
 */
const Contact = () => {
    const { t, i18n } = useTranslation();
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const [errors, setErrors] = useState({});
    const titleArray = t('contact.title').split('');

    // Show content after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    // Add animation class after a delay
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5000);
    }, []);

    const refForm = useRef();

    // Validate form input fields
    const validate = useCallback((name, value) => {
        switch (name) {
            case 'user_name':
                return /^[A-Za-zÀ-ÿ '-]{2,}$/.test(value) ? '' : t('contact.userNameError');
            case 'user_email':
                return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value) ? '' : t('contact.userEmailError');
            case 'subject':
                return value.length >= 3 ? '' : t('contact.subjectError');
            case 'message':
                return value.length >= 10 ? '' : t('contact.messageError');
            default:
                return '';
        }
    }, [t]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const error = validate(name, value); // Use validate here
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    // Use validate in useEffect dependencies array
    useEffect(() => {
        // Validate form when language is changing
        const form = refForm.current;
        const formData = new FormData(form);
        let newErrors = {};

        formData.forEach((value, key) => {
            const error = validate(key, value);
            if (error) {
                newErrors[key] = error;
            }
        });

        setErrors(newErrors);
    }, [i18n.language, validate]);

    // Send email using EmailJS
    const sendEmail = (e) => {
        e.preventDefault();

        const form = refForm.current;
        const formData = new FormData(form);
        let formIsValid = true;
        let newErrors = {};

        formData.forEach((value, key) => {
            const error = validate(key, value);
            if (error) {
                formIsValid = false;
                newErrors[key] = error;
            }
        });

        setErrors(newErrors);

        if (formIsValid) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_CONTACT_SERVICE,
                process.env.REACT_APP_EMAILJS_CONTACT_FORM,
                refForm.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            ).then(() => {
                console.log('SUCCESS!');
                alert(t('contact.alertSuccess'));
                window.location.reload(false);
            }, (error) => {
                console.log('FAILED...', error);
                alert(t('contact.alertFail'));
            });
        }
    };

    return (
        <>
            {showContent && (
                <div className='container contact-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                        </h1>

                        <p>{t('contact.firstParagraph')}</p>
                        <p>{t('contact.secondParagraph')}</p>

                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            placeholder={t('contact.placeholderName')}
                                            required
                                            onChange={handleChange}
                                        />
                                        {errors.user_name && <span className="error">{errors.user_name}</span>}
                                    </li>
                                    <li className='half'>
                                        <input
                                            type='email'
                                            name='user_email'
                                            placeholder={t('contact.placeholderEmail')}
                                            required
                                            onChange={handleChange}
                                        />
                                        {errors.user_email && <span className="error">{errors.user_email}</span>}
                                    </li>
                                    <li>
                                        <input
                                            type='text'
                                            name='subject'
                                            placeholder={t('contact.placeholderSubject')}
                                            required
                                            onChange={handleChange}
                                        />
                                        {errors.subject && <span className="error">{errors.subject}</span>}
                                    </li>
                                    <li>
                                        <textarea
                                            name='message'
                                            placeholder={t('contact.placeholderMessage')}
                                            required
                                            onChange={handleChange}
                                        />
                                        {errors.message && <span className="error">{errors.message}</span>}
                                    </li>
                                    <li>
                                        <input type='submit' className='flat-button' value={t('contact.send')} />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    <div className='info-map'>
                        Virginie GROLLEAU<br />
                        86600 CLOUÉ<br />
                        FRANCE<br />
                        <span>contact@virginiegrolleau.com</span>
                    </div>
                    <div className='map-wrap'>
                        <MapContainer center={[46.441, 0.164]} zoom={13}>
                            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                            <Marker position={[46.442, 0.164]}>
                                <Popup>
                                    A pretty CSS3 popup.<br />
                                    Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            )}
        </>
    );
}

export default Contact;