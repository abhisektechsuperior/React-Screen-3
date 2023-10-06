import React from 'react'



const Navbar = () => {
  return (
    <>
      <div className="navbarContainer bg-white m-0 ">
        <div className=" container-fluid justify-content-between d-flex ">
          <div className='navbar-brand  align-item-left '>
            <div className="nav-item d-sm-block">
              <a className="navbar-brand  "><img className='img-fluid' src="https://download.logo.wine/logo/National_Car_Rental/National_Car_Rental-Logo.wine.png" /></a>
            </div>
          </div>

          <div className='nav-item  justify-content-evenly my-3 '>
            <div className='row'>
              <div className='col'>
                <div className='row'>
                  <div className='col-md-3 '>
                    <div className="nav-item">
                      <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        I'm a Landlord
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Abhisek kumar</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-3 '>
                    <div className="nav-item">
                      <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        I'm a Tenant
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Bhupendra Singh</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-3 '>
                    <div className="nav-item">
                      <a className="nav-link disabled" href="#"><b>Search Rentals</b></a>
                    </div>
                  </div>
                  <div className='col-md-3 '>
                    <div className="nav-item ">
                      <a className='nav-link ' href="#">
                        <button type="button" class="btn btn-outline-danger">Contact Us</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;