import React from 'react';

function Rent() {
    const openURL = () => {
        const urlToOpen = 'https://www.magicbricks.com/property-for-sale-rent-in-Gurgaon/residential-real-estate-Gurgaon'; // Replace with the URL you want to open
        window.open(urlToOpen, '_blank'); // '_blank' opens the URL in a new tab or window
    };

    return (
        <div>

            {/* Add your icon component here */}
            <button type="button" class="learnbtn btn-danger offset-sm-1" onClick={openURL}>Learn More </button><br /><br />

        </div>
    );
}

export default Rent;