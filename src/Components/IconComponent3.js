import React from 'react';
import insta from '../assets/insta.png'

function IconComponent3() {
    const openURL = () => {
        const urlToOpen = 'https://www.instagram.com/'; // Replace with the URL you want to open
        window.open(urlToOpen, '_blank'); // '_blank' opens the URL in a new tab or window
    };

    return (
        <div>

            {/* Add your icon component here */}
            <img className='footerimage' src={insta} onClick={openURL} alt="" />

        </div>
    );
}

export default IconComponent3;