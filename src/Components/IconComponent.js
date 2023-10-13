import React from 'react';
import twitter from '../assets/twitt black icon.png'

function IconComponent() {
    const openURL = () => {
        const urlToOpen = 'https://twitter.com/?logout=1695707002873'; // Replace with the URL you want to open
        window.open(urlToOpen,'_blank'); // '_blank' opens the URL in a new tab or window
    };

    return (
        <div>

            {/* Add your icon component here */}
            <img className='footerimage' src={twitter} onClick={openURL} alt="" />

        </div>
    );
}

export default IconComponent;