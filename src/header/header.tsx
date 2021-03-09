import React, {FC} from 'react';
import './style.css';

type HeaderProp = {
    text: string;
}

const Header:FC<HeaderProp> = ({text}: HeaderProp)=>{
    return <header className="header">
        <div className="Logo">
            {text}
            <div className="logo">
                <svg width="50" height="50" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.0858 42C21.029 42.6591 21 43.3262 21 44C21 56.7025 31.2975 67 44 67C44.6738 67 45.3409 66.971 46 66.9142V83C46 85.7614 43.7614 88 41 88H5C2.23858 88 0 85.7614 0 83V47C0 44.2386 2.23858 42 5 42H21.0858ZM21.0858 42C22.0993 30.2339 31.9713 21 44 21C56.7025 21 67 31.2975 67 44C67 56.0287 57.7661 65.9007 46 66.9142V47C46 44.2386 43.7614 42 41 42H21.0858Z"
                          fill="url(#paint0_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="70" y1="27" x2="3" y2="94"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#AB70E6"/>
                            <stop offset="1" stop-color="#20C0D6"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>

    </header>;
}

export default Header;