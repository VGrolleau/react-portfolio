import './Contact.scss';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';

/**
 * Component for rendering the Contact page.
 */
const Contact = () => {
    const [showContent, setShowContent] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const [errors, setErrors] = useState({});
    const titleArray = ['M', 'e', ' ', 'c', 'o', 'n', 't', 'a', 'c', 't', 'e', 'r'];

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
    const validate = (name, value) => {
        switch (name) {
            case 'user_name':
                return /^[A-Za-zÀ-ÿ '-]{2,}$/.test(value) ? '' : 'Le nom doit comporter au moins 2 caractères et ne peut contenir que des lettres, des apostrophes, des tirets et des espaces.';
            case 'user_email':
                return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value) ? '' : 'Veuillez entrer une adresse e-mail valide.';
            case 'subject':
                return value.length >= 3 ? '' : "L'objet doit comporter au moins 3 caractères.";
            case 'message':
                return value.length >= 10 ? '' : 'Le message doit comporter au moins 10 caractères.';
            default:
                return '';
        }
    };

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        const error = validate(name, value);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

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
            emailjs.sendForm("service_vgrolleau", "template_vgrolleau", refForm.current, "PRikGgLu4Y4aBE_WI")
                .then(() => {
                    console.log('SUCCESS!');
                    alert('Message envoyé avec succès !');
                    window.location.reload(false);
                }, (error) => {
                    console.log('FAILED...', error);
                    alert("Échec de l'envoi du message, recommencez s'il vous plaît");
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

                        <p>
                            Je suis toujours à la recherche de nouveaux défis et de projets passionnants à réaliser. En tant que développeuse web freelance spécialisée en développement Front-End, je suis disponible pour discuter de vos besoins et vous apporter des solutions personnalisées.
                        </p>
                        <p>
                            N'hésitez pas à me contacter pour échanger sur votre projet ou toute autre demande ; je me ferai un plaisir de vous répondre rapidement et de collaborer avec vous pour concrétiser vos idées.
                        </p>

                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            placeholder='Nom'
                                            required
                                            onChange={handleChange}
                                        />
                                        {errors.user_name && <span className="error">{errors.user_name}</span>}
                                    </li>
                                    <li className='half'>
                                        <input
                                            type='email'
                                            name='user_email'
                                            placeholder='Email'
                                            required
                                            onChange={handleChange}
                                        />
                                        {errors.user_email && <span className="error">{errors.user_email}</span>}
                                    </li>
                                    <li>
                                        <input
                                            type='text'
                                            name='subject'
                                            placeholder='Objet'
                                            required
                                            onChange={handleChange}
                                        />
                                        {errors.subject && <span className="error">{errors.subject}</span>}
                                    </li>
                                    <li>
                                        <textarea
                                            name='message'
                                            placeholder='Message'
                                            required
                                            onChange={handleChange}
                                        />
                                        {errors.message && <span className="error">{errors.message}</span>}
                                    </li>
                                    <li>
                                        <input type='submit' className='flat-button' value='envoyer' />
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