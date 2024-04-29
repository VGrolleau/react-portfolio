import './index.scss';

const Logo = () => {
    return (
        <div className='logo-container'>
            {/* <svg viewBox="0 0 340 333">
                <path className="path" fill="white" stroke="black" strokeWidth="4" d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41C46.039,146.545,53.039,128.545,66.039,133.545z" />
            </svg> */}

            {/* <svg viewBox="0 0 200 200">
                <circle id="c1" cx="100" cy="100" r="100" fill="none" opacity="0" stroke="#000000" stroke-width="2" />
                <animate
                    xlinkHref="#c1"
                    attributeName="opacity"
                    dur="10s"
                    // keyTimes="0;0.5;1"
                    values="0;1;"
                    // repeatCount="indefinite"
                    fill="freeze" />
            </svg> */}

            {/* <svg viewBox="0 0 200 200">
                <circle id="c1" cx="100" cy="100" r="100" fill="none" opacity="0" stroke="#000000" stroke-width="2" />
                <animate
                    xlinkHref="#c1"
                    attributeName="opacity"
                    dur="10s"
                    form="0"
                    to="1"
                    repeatCount="1"
                    fill="freeze" />
            </svg> */}

            <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="110" font-family="Arial" font-size="150" fill="#ffd700">V</text>
                <text x="5" y="105" font-family="Arial" font-size="150" fill="#115173">V</text>
            </svg>

            <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg" className="svg-container" transform="translate(0 457) scale(.1 -.1)" fill="none">
                <text x="0" y="110" font-family="Arial" font-size="150" stroke="#000000" stroke-width="2" fill="none">V</text>
                <text x="5" y="105" font-family="Arial" font-size="150" stroke="#000000" stroke-width="2" fill="none">V</text>
            </svg>
        </div>
    )
}

export default Logo;