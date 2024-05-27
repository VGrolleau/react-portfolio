import PropTypes from 'prop-types';
import './AnimatedLetters.scss';

/**
 * AnimatedLetters component renders an array of characters with animation classes.
 * @param {Object} props - Props passed to the component.
 * @param {string} props.letterClass - CSS class for the letter animation.
 * @param {Array} props.charactersArray - Array of characters to animate.
 * @param {number} props.index - Starting index for the animation delay.
 */
const AnimatedLetters = ({ letterClass, charactersArray, index }) => {
    return (
        <span>
            {charactersArray.map((character, i) => (
                <span key={character + i} className={`${letterClass} _${i + index}`}>
                    {character}
                </span>
            ))}
        </span>
    );
};

AnimatedLetters.propTypes = {
    letterClass: PropTypes.string.isRequired,
    charactersArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired,
};

export default AnimatedLetters;