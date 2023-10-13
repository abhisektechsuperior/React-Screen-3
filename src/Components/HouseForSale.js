import React from 'react';

function HouseForSale() {
    const openURL = () => {
        const urlToOpen = 'https://www.nobroker.in/property/sale/gurgaon/Sector%2023/?searchParam=W3sibGF0IjoyOC41MTIxMzc2LCJsb24iOjc3LjA0Nzc1NTksInBsYWNlSWQiOiJDaElKcjBxb0xvSVpEVGtScmlmQzBMQ2hWS0EiLCJwbGFjZU5hbWUiOiJTZWN0b3IgMjMiLCJzaG93TWFwIjpmYWxzZX1d&type=BHK2,BHK3,BHK4,BHK4PLUS&propType=IH,GC&price=5000000,100000000&orderBy=price,asc&utm_source=google&utm_medium=cpc&utm_campaign=Search_Sale_Gurgaon_Locality_Acq&adgroup=Sector_23&utm_content=house%20for%20sale%20sector%2023%20gurgaon&gclid=CjwKCAjw38SoBhB6EiwA8EQVLmGKNWzj4tKnk1rWwLhI1v1Vb9ISDNUrTWGWq-cDFpkH9PJ7OkbzWBoCMFoQAvD_BwE'; // Replace with the URL you want to open
        window.open(urlToOpen, '_blank'); // '_blank' opens the URL in a new tab or window
    };

    return (
        <div>

            {/* Add your icon component here */}
            <button type="button" class="btn btn-danger mx-3" onClick={openURL}>Discover Now</button>

        </div>
    );
}

export default HouseForSale;