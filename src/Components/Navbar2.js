import React, { useState } from 'react';



const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {/* <div className="navbarContainer bg-white m-0 "> */}
      <nav className="navbar2 justify-content-between">
      <div className="navbar-brand"><img className='img-fluid'src='https://download.logo.wine/logo/National_Car_Rental/National_Car_Rental-Logo.wine.png'/></div>
      <ul className={`navbar-links ${showMenu ? 'show' : ''}my-3 offset-sm-5`}>
        <li>
        <div classname="dropdown">
  <p class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    I'm a Landlord  </p>
  <div classname="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a classname="dropdown-item" href="#">Abhisek</a>
  </div>
</div>
        </li>
        <li>
        <div class="dropdown">
  <p class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    I'm a Tenant  </p>
  <div classname="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a classname="dropdown-item" href="#">Abhisek</a>
  </div>
</div>
        </li>
        <li>
          <h6>Search Renetals</h6>
        </li>
        <li>
        <button type="button" class="btn btn-outline-danger">Contact Us</button>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
      <div class="bar1"></div>
  <div classname="bar2"></div>
  <div classname="bar3"></div>
      </div>
    </nav>
      {/* </div> */}
    </>
  )
}

export default Navbar2;