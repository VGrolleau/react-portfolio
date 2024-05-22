import './Logo.scss';

const Logo = () => {
    return (
        <div className='logo-container'>
            <svg xmlns="http://www.w3.org/2000/svg" className='solid-logo'>
                <text>V</text>
                <text>V</text>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="svg-container" transform="translate(0 457) scale(.1 -.1)">
                <text>V</text>
                <text>V</text>
            </svg>
        </div>
    )
}

export default Logo;