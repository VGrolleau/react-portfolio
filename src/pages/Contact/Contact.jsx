import Loader from 'react-loaders';
import './Contact.scss';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const titleArray = ['M', 'e', ' ', 'c', 'o', 'n', 't', 'a', 'c', 't', 'e', 'r'];

    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 2500)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_vgrolleau", "template_vgrolleau", refForm.current, "PRikGgLu4Y4aBE_WI")
            .then(() => {
                console.log('SUCCESS!');
                alert('Message envoyé avec succès !');
                window.location.reload(false);
            }, (error) => {
                console.log('FAILED...', error);
                alert("Échec de l'envoi du message, recommencez s'il vous plaît");
            });
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} charactersArray={titleArray} index={10} />
                    </h1>

                    <p>
                        N’hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Nom' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Objet' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required />
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
            <Loader type='pacman' />
        </>
    )
}

export default Contact;