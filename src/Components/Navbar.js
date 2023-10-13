import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="navbarContainer  ">
        <nav class="navbar navbar-expand-lg b">
          <div class="container">
            <div className='container d-flex'>
              <a class="navbar-brand "><img className='img-fluid ' src='https://download.logo.wine/logo/National_Car_Rental/National_Car_Rental-Logo.wine.png' /></a>
              <div class="navbar-toggler text-white" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
            </div>
            <div className='container container-fluid justify-content-space'>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto justify-content-space ">
                  <li className='navheadtenant'>
                    <div classname="dropdown">
                      <p class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        I'm a Landlord  </p>
                    </div>
                  </li>
                  <li className=' mx-3'>
                    <div class="dropdown">
                      <p class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        I'm a Tenant  </p>
                    </div>
                  </li>
                  <li className=' mx-3'>
                    <h6>Search Renetals</h6>
                  </li>
                  <li>
                    <button type="button" class="btn btn-outline-danger mx-3">Contact Us</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;