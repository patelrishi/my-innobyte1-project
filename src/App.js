import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
const menuRef =useRef(null)
          const closeMenu =()=>{
            if(menuRef.current){
              menuRef.current.style.left='260px';
            }
          }
          const openMenu =()=>{
            if(menuRef.current){
              menuRef.current.style.left='0';
            }
          }
  return (
    <>
      <div id='Home'>
        <div className='container'>
          <nav className='navbar'>
            <a className='logo' href='https://api.whatsapp.com/send?phone=919007062180'><span>Kingsukh <br />GuestHouse</span></a>
            <ul className='list-items'ref={menuRef} >
              <li><a href='#Home'>Home</a></li>
              <li><a href='#About'>About</a></li>
              <li><a href='#Services'>Services</a></li>
              <li><a href='#Rooms'>Rooms</a></li>
              <li><a href='#Gallery'>Gallery</a></li>
              <li><a href='#Contact'>Contact</a></li>

              <i className="ri-close-line" onClick={()=>closeMenu()} ></i>
            </ul>
            <i className="ri-list-check" onClick={()=>openMenu()} ></i>            
            <a href='https://api.whatsapp.com/send?phone=919007062180'><button className='header-btn' >BOOK NOW</button></a>
          </nav>
          <div className='home-text'>
            <p>Simple-Unique-Friendly</p>
            <div>
              <h1 className='home-h1'>Make Yourself At Home <br className='br' />In Our <span>Guest House</span>.</h1>
            </div>
          </div>
        </div>
        <div className='home-bottom-btn-container'>
          <a href='https://api.whatsapp.com/send?phone=919007062180'><button className='home-bottom-btn'>BOOK NOW</button></a>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className='about-container section-container' id='About'>
        <div className='img-container'>
          <img src='/out.jpg' />
        </div>
        <div className='content-container'>
          <p className='about-title'>ABOUT US</p>
          <h2 className='about-subtitle'> The Best Holidays Start Here! </h2>
          <p className='about-description'> Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
          <h2 className='address'> Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</h2>
          <h2 className='address'> Contact us: +91 9007062180</h2>
          <a href='https://api.whatsapp.com/send?phone=919007062180'> <button className='about-btn'>BOOK NOW </button> </a>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br />

      <div className='rooms-container' id='Rooms' >
        <div className='rooms-title-container'>
          <p className='rooms-title'>OUR LIVING ROOM</p>
          <h2 className='rooms-subtitle'>The Most Memorable Rest Time Starts Here.</h2>
        </div><br /><br /><br /><br />
        <div className='rooms-imgs-container'>
          <div className='rooms-img-container'>
            <div className='rooms-img-card'>
              <img src='/small.jpg' />
              <div className='rooms-icon-card'>
                <span> <i className='ri-heart-fill'></i> </span>
                <span><i className='ri-paint-fill'></i></span>
                <span><i className='ri-shield-star-line'></i></span>
              </div>
            </div>
            <div className='rooms-details-card'>
              <h1>Cozy Haven Room</h1>
              <p>Escape to comfort In our Cozy haven Room, asnug retreat designed for intimate relaxation.</p>
              <p>Starting from <span>Rs.1000/night</span></p>
              <a href='https://api.whatsapp.com/send?phone=919007062180'><button className='rooms-img-btn'>BOOK NOW</button></a>
            </div>

          </div>
          <div className='rooms-img-container'>
            <div className='rooms-img-card'>
              <img src='/large.jpg' />
              <div className='rooms-icon-card'>
                <span> <i className='ri-heart-fill'></i> </span>
                <span><i className='ri-paint-fill'></i></span>
                <span><i className='ri-shield-star-line'></i></span>
              </div>
            </div>
            <div className='rooms-details-card'>
              <h1>Spacious Senerity Suit</h1>
              <p>Indulge in luxury and ample space in our Spacious Senerity Suit, where tranquility meets roomy elegance.</p>
              <p >Starting from <span>Rs.1500/night</span></p>
              <a href='https://api.whatsapp.com/send?phone=919007062180'><button className='rooms-img-btn'>BOOK NOW</button></a>
            </div>
          </div>
        </div>
      </div><br /><br /><br />

      <div className='services-container' id='Services'>
        <div className='services-content'>
          <p className='services-title'>SERVICES</p>
          <h1 className='services-subtitle'>Strive Only For The Best.</h1>
          <ul>
            <li><span className='icon1' ><i className='ri-shield-star-line'></i></span>High Class security</li>
            <li><span className='icon2' ><i className='ri-24-hours-line'></i></span>24 Hours Room Service</li>
            <li><span className='icon3' ><i className='ri-restaurant-2-fill'></i></span>Restaurant</li>
            <li><span className='icon4' ><i className='ri-map-2-line'></i></span>Tourist Guide Support</li>
          </ul>
        </div><br /><br /><br />
        <div className='services-banner-container'>
          <div className='services-banner1'>
            <h1>100+</h1>
            <p>Booking Completed</p>
          </div>
          <div className='services-banner2'>
            <h1>150+</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />

      <div className='gallery-container' id='Gallery'>
        <div className='gallery-title'>
          <p>GALLERY</p>
        </div>
        <div className='gallery-Allimgs'>
          <div className='gallery-imgs a'><img src='/out.jpg' /></div>
          <div className='gallery-imgs b'><img src='/ayodhya.webp' /></div>
          <div className='gallery-imgs c' ><img src='/large.jpg' /></div>
          <div className='gallery-imgs d' ><img src='/palash.webp' /></div>
          <div className='gallery-imgs e' ><img src='/small.jpg' /></div>
          <div className='gallery-imgs f' ><img src='/baranti.webp' /></div>
          <div className='gallery-imgs g' ><img src='/recep.jpg' /></div>
          <div className='gallery-imgs h' ><img src='/room1.jpg' /></div>
          <div className='gallery-imgs i' ><img src='/flower.jpg' /></div>
          <div className='gallery-imgs j' ><img src='/mithonDam.webp' /></div>
        </div>
      </div><br /><br /><br /><br /><br />
      <div className='Contact-container' id='Contact'>
        <div className='contact-left-content'>
          <h2>Contact Info</h2>
          <p><span><i className='ri-map-pin-user-line' ></i></span>&nbsp;&nbsp; Beside Barshal Water Tank,Manpur, Barhanti,West Bengal 723156 </p>
          <p><span><i className='ri-mail-line' ></i></span>&nbsp;&nbsp;kkghosh0099@gmail.com</p>
          <p><span><i className='ri-phone-line' ></i></span>&nbsp;&nbsp; +91 9007062180</p>
          <div className='socialmedia-icon'>
            <a href='#'><span><i className='ri-facebook-fill' ></i></span></a>
            <a href='https://www.instagram.com/kingsukhguesthouse/' ><span><i className='ri-instagram-line' ></i></span></a>
            <a href='#' ><span><i className='ri-twitter-fill' ></i></span></a>
            <a href='#' ><span><i className='ri-linkedin-fill' ></i></span></a>
          </div>
        </div>
        <div className='contact-right-content'>
          <h2>Send a Message</h2>
          <div className='contact-form'>
            <div className='input1' ><input type='text'required/><span>First Name</span></div>
            <div className='input1' ><input type='text'required/><span>Last Name</span></div>
            <div className='input1' ><input type='email'required/><span>Email</span></div>
            <div className='input1' ><input type='number'required/><span>Mobile Number</span></div>
            <div className='input1' ><textarea required/><span>Write your message Here...</span></div>
            <a href='#'><button className='contact-form-btn'>Send</button></a>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className='map-container'>
        <iframe  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"  ' />
      </div>
      <div className='footer-container'>
        <div className='footer-col1'>
          <div className='footer-col1-header'><a href='#Home' ><h4>King Sukh Guest House</h4></a></div>
          <p className='footer-col1-description'>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
          <a href='#'><button className='footer-col1-btn'>BOOK NOW</button></a>
        </div>
        <div className='footer-col'>
          <h4 className='footer-col-header'>QUICK LINKS</h4>
          <ul>
            <li><a href='#' >Browser Destination</a></li>
            <li><a href='#' > Speacial Offers & Packages </a></li>
            <li><a href='#' >Room Types and Amenities</a></li>
            <li><a href='#' >Customer reviews & Rating </a></li>
            <li><a href='#'> Travel Trips & Guides</a></li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4 className='footer-col-header'>OUR SERVICES</h4>
          <ul>
            <li><a href='#' >Concierge Assistance</a></li>
            <li><a href='#' > Flexible Booking Options</a></li>
            <li><a href='#' >Airport Transports</a></li>
            <li><a href='#' >Wellness & Recreation </a></li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4 className='footer-col-header'>CONTACT US</h4>
          <ul>
            <li><a href='#' >Address: Beside Barshal<br/> Water Tank,Manpur,Barhanti,<br/>West Bengal 723156</a></li>
            <li><a href='#' >kkghosh0099@gmail.com</a></li>
            <li><a href='#' >+91 9007062180</a></li>
          </ul>
          <div className='footer-col-socialmedia'> 
            <a href='#' ><img src='/facebook.png' alt='Facebook'/></a>
            <a href='https://www.instagram.com/kingsukhguesthouse/'><img src='/instagram.png' alt='Instagram'/></a>
            <a href='#' ><img src='/youtube.png' alt='Youtube'/></a>
            <a href='#' ><img src='/twitter.png' alt='Twitter'/></a>
          </div>
        </div>
      </div>
      <footer>
          <div>Copyright &copy; 2024 King Sukh Guest House. All Sites Reserved.</div>
        </footer>

        
    </>
  );
}

export default App;