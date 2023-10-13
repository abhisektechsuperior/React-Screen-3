import React from 'react';
import facebook from '../assets/fb-blackicon.webp'

function IconComponent2() {
    const openURL = () => {
        const urlToOpen = 'https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804932%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804932&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007765%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw38SoBhB6EiwA8EQVLrNFJ06VSO7yfeR_J0mLvuULkciNC05YPXok9gwNB20RWXSRBHG0_BoCIqwQAvD_BwE'; // Replace with the URL you want to open
        window.open(urlToOpen, '_blank'); // '_blank' opens the URL in a new tab or window
    };

    return (
        <div>

            {/* Add your icon component here */}
            <img className='footerimage' src={facebook} onClick={openURL} alt="" />

        </div>
    );
}

export default IconComponent2;