import './Logo.scss';

const Logo = () => {
    return (
        <div className='logo-container'>
            <svg width="510" height="510" xmlns="http://www.w3.org/2000/svg" className='solid-logo'>
                <text x="0" y="505" font-family="Coolvetica" font-size="150" fill="#ffd700">V</text>
                <text x="15" y="495" font-family="Coolvetica" font-size="150" fill="#115173">V</text>
            </svg>

            <svg width="510" height="510" xmlns="http://www.w3.org/2000/svg" className="svg-container" transform="translate(0 457) scale(.1 -.1)" fill="none">
                <text x="0" y="505" font-family="Coolvetica" font-size="150" stroke="#000000" stroke-width="2" fill="none">V</text>
                <text x="15" y="495" font-family="Coolvetica" font-size="150" stroke="#000000" stroke-width="2" fill="none">V</text>
            </svg>
        </div>
    )
}

export default Logo;