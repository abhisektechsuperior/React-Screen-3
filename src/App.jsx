import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Form1 from './Components/Form1'
import Card from './Components/Card'
import Developer from './Components/Developer'
import OwnerPhoto from './Components/OwnerPhoto'
import IconComponent from './Components/IconComponent'
import IconComponent2 from './Components/IconComponent2'
import IconComponent3 from './Components/IconComponent3'
import HouseForSale from './Components/HouseForSale'
import Rent from './Components/Rent'
import homehouse from './assets/homehouse.jpg'
import homehouse2 from './assets/homehouse2.jpg'

const App = () => {

  return (
    <>
      <body className="body">
        <div className=' Home2Container Container-fluid bg-white '>
          <Navbar />
          <div className='Container Container-fluid'>
            <div className='row justify-content-evenly'>
              <div className='col-11'>
                <div className='row'>
                  <div className='col my-5'>
                    <h2 className='need'>Need to Rent a House?</h2>
                    <p className='need'>We'll help you find your next home</p>
                    <Form1 />
                    <br />
                    <div className=' circlecontainer3 container-fluid'>
                      <div className='row row-cols-4'>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                      </div>
                      <div className='row row-cols-4 my-2'>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                      </div>
                      <div className='row row-cols-4 my-2'>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                      </div>
                      <div className='row row-cols-4 my-2'>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                        <div className='col'>
                          <div className='circle'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col me-0 '>
                    <div class="container my-2">
                      <div class="row">
                        <div className='col-12'>
                          <div className='row'>
                            <div class="col-6 ">
                              <img className='img-1 ' src={homehouse} alt="" />
                            </div>
                            <div class="col-6">
                              <img className='img-1' src={ homehouse2} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='DiscoverContainer my-2'>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col my-5'>
                    <h2 className='need'>Discover Your Perfect Home Today</h2>
                    <p className='need'>Welcome to your source for leasing and managing beautiful rental homes Indonesia</p>
                    {/* <button type="button" class="btn btn-danger mx-3">Discover Now</button> */}
                    <HouseForSale/>
                  </div>
                  <div className='col my-5'>
                    <img className='dishphoto' src="https://designinstituteindia.com/wp-content/uploads/2022/10/IMG_20221005_103517.jpg" alt="" />
                  </div>
                  <div className='col '>
                    <img className='disphoto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIoTkXj7tCWpOpOf-v5MN22okiYIHgF3wAg&usqp=CAU" alt="" />
                    <p className='photopara'><b>Malang,Jawa timur</b><br />6 property listed</p>
                  </div>
                  <div className='col my-5'>
                    <img className='disphoto' src="https://content.jdmagicbox.com/comp/kushinagar/r8/9999p5564.5564.200919062014.f8r8/catalogue/om-house-design-tamkuhi-kushinagar-207ig8nuqq.jpg?clr=" alt="" />
                  </div>
                  <div className='col my-5'>
                    <img className='disphoto' src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='txtcontainer container-fluid my-5'>
            <h3>Our 2 Services</h3>
            <p>We keep it Smile</p>
          </div>
          <div className=' circlecontainer container-fluid'>
            <div className='row row-cols-4'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-4 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-4 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-4 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
          </div>
          <div className='container container-fluid'>
            <div className='row justify-content-evenly '>
              <div className='col-12'>
                <div className='row'>
                  <div className="card justify-content-evenly ">
                    <div className='row'>
                      <div className='col-md-7 col-sm-12 '>
                        <div className='box-1 my-5 '>
                          <div className='text-box '>
                            <h2 className='rent-text-1'>RENT-UP-SERVICE</h2>
                            <p className='rent-text'><b>We take the hassle out finding your next tenant</b></p>
                            <p className='rent-text'>Everything from marketing your property to moving in your tenant is all<br /> handled by our team .
                              You set the requirenments and we screen the<br /> tenants to find you the perfect match.No upfront fees.
                            </p>
                            {/* <button type="button" class="learnbtn btn-danger offset-sm-1" >Learn More </button><br /><br /> */}
                            <Rent/>
                          </div>
                        </div>
                      </div>
                      <div className='imgcol col-md-5 col-sm-12  '>
                        <div className='img-box-1 '>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' circlecontainer container-fluid'>
            <div className='row row-cols-4'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-4 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-4 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-4 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
          </div>
          <div className='container container-fluid my-5'>
            <div className="row m-1 row  justify-content-evenly d-flex">
              <div className='row justify-content-evenly'>
                <div className="card-col-md-6 col-sm-11">
                  <div className='row'>
                    <div className='col-md-6 col-sm-10 p-0'>
                      <Developer />
                    </div>
                    <div className='col-md-6 col-sm-10 '>
                      <div className='content-box my-1'>
                        <div className=' circlecontainer2 container-fluid position-absolute'>
                          <div className='row row-cols-4'>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                          </div>
                          <div className='row row-cols-4 my-2'>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                          </div>
                          <div className='row row-cols-4 my-2'>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                          </div>
                          <div className='row row-cols-4 my-2'>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                            <div className='col'>
                              <div className='circle'></div>
                            </div>
                          </div>
                        </div>
                        <h2 className='manage'>MANAGEMENT SERVICE</h2>
                        <p className='manag'><b>Ready for profittable property management service you can rely on?</b></p>
                        <p className='manag'>Test drive our tech -driven service focuused property management service that
                          derivers real charity on your assets. and pricritizes your net profitablity.flat free service without
                          any hidden loses. Open 7 days a week.
                        </p>
                        <button type="button" class="btn btn-danger me-5 " data-bs-target="#carouselExampleFade" data-bs-slide="next">Discover Now</button><br /><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' circlecontainer container-fluid'>
              <div className='row row-cols-4'>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
              </div>
              <div className='row row-cols-4 my-2'>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
              </div>
              <div className='row row-cols-4 my-2'>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
              </div>
              <div className='row row-cols-4 my-2'>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
                <div className='col'>
                  <div className='circle'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='textcontainer container-fluid my-5'>
            <h3><b>Featured Properties</b></h3>
          </div><br />
          <Card />
          <div className='btncontainer my-5  '>
            <button type="button" class="seebtn btn-warning my-4" data-bs-target="#carouselExampleControls" data-bs-slide="next">See More Property</button>
          </div>
          <div className='SayAboutContainer my-5'>
            <h1>What People Say About Us</h1>
          </div><br />
          <div className='girlcontainer container-fluid '>
            <div className="row m-1 row  justify-content-evenly d-flex">
              <div className='row justify-content-evenly'>
                <div className="card-col-md-6 col-sm-11">
                  <div className="row  ">
                    <div className="col">
                      <OwnerPhoto />
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <div className='Abhi-text my-3'>
                        <h4 className='m mx-4'>  Abhishek (Abhi Rock Star)</h4>
                        <p className='m mx-4 my-3'>Abhishek (Abhi Rock Star)was born on 10 August 1979 to a Sikh father and a Catholic mother in Mumbai.[1] He has two siblings Shefali Ahluwalia and Sameer Ahluwalia. He did his schooling from St. Xavier's High School, Vile Parle.[5] He completed his graduation from University of Maryland, College Park.[5][6] </p>
                        <p className='m my-5 mx-3'>Abhishek Prem Mehra.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer1container container-fluid my-5'>
            <div className='row'>
              <div className='col mx-5 my-5'>
                <h1>Get Connected with top agents near you and find your home</h1>
                <div className='container container-fluid justify-content-between mx-0 my-4'>
                  <div className='row'>
                    <div className='col'>
                      <div className=' circlecontainer7 container-fluid mx-0'>
                        <div className='row row-cols-4'>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                        </div>
                        <div className='row row-cols-4 my-2'>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                        </div>
                        <div className='row row-cols-4 my-2'>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                        </div>
                        <div className='row row-cols-4 my-2'>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                          <div className='col'>
                            <div className='circle'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <p>Get in touch or create account.We are 24/7 available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='footerboxcontainer d-flex '>
                  <div className='footerbox-1'></div>
                  <div className='footerbox-2'></div>
                </div>
                <div className='footerboxcontainer2 d-flex'>
                  <div className='btndiv'>
                    <button type="button" class="btn btn-light bg-white my-3 me-4">Find Agent</button>
                  </div>
                  <div className='footerbox-1'></div>

                </div>
              </div>
            </div>
          </div>
          <div className='underfootercontainer container-fluid my-5'>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col my-2 mx-4'>
                    <img className='img-fluid2' src='https://download.logo.wine/logo/National_Car_Rental/National_Car_Rental-Logo.wine.png' />
                    <p className='m mx-4'>We are greatfull thank to you for visit our website.We are always making a creative website or page for
                      you.Thanks again.
                    </p>
                  </div>
                  <div className='col my-5 '>
                    <p className='fthead'><b>Community</b></p>
                    <p className='ftpara'>For Rent <br />For Seller<br />For Buyer<br />Search home</p>
                  </div>
                  <div className='col my-5 mx-5'>
                    <p className='fthead'><b>About</b></p>
                    <p className='ftpara'>Our Story<br />Careers<br />Meet the Team</p>
                  </div>
                  <div className='col my-5'>
                    <p className='fthead'><b>Contact</b></p>
                    <p className='ftpara'>Savindera Club<br />Simple Text<br />Malang Jawa tirrur<br />indonesia</p>
                  </div>
                </div>
              </div><br />
              <div className='row'>
                <div className='col-6'>
                  <div className='row mx-4 my-5'>
                    <div className='col-1'>
                      <IconComponent3 />
                    </div>
                    <div className='col-1'>
                      <IconComponent2 />
                    </div>
                    <div className='col-1'>
                      <IconComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' circlecontainer8 container-fluid '>
            <div className='row row-cols-6'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-6 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-6 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-6 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-6 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
            <div className='row row-cols-6 my-2'>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
              <div className='col'>
                <div className='circle'></div>
              </div>
            </div>
          </div><br />
        </div>
      </body>
    </>
  )
}
export default App