import './AnimatedLetters.scss';

const AnimatedLetters = ({ letterClass, charactersArray, index }) => {
    return (
        <span>
            {
                charactersArray.map((character, i) => (
                    <span key={character + i} className={`${letterClass} _${i + index}`}>
                        {character}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;