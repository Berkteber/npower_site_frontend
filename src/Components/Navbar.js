import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-section ${isSticky ? "navbar-sticky" : ""}`}
    style={{ 
      background:"#E4F2F3" 
    }}>
      <div className='navbar-top'>
        <div className='container'>
          <div className="row">
            <div className="col-6 navbar-contact">
              <a href="tel:+902166062800">
                <FontAwesomeIcon icon={faPhone} /> +90 216 606 28 00
              </a>
              <a className='mail' href="mailto:info@npowergenerator.com">
                <FontAwesomeIcon icon={faEnvelope} /> info@npowergenerator.com
              </a>
            </div>
            <div className="col-6 navbar-button">
              <a href="https://www.instagram.com/npowergenerator/" rel="noopener">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/npower-generator/" rel="noopener">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#0">
                <img src="/Assets/image/eng.svg" alt="English" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar-bottom'>
        <div className='container'>
          <div className="row align-items-end nav-grid">
            <div className="col-4">
              <Link to="/">
                <img src="/Assets/image/n-power_logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className="col-8 nav-area">
              <button className="hamburger-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
              </button>
              <ul className={`npower-navbar ${isMenuOpen ? 'open' : ''}`}>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li className="dropdown-link" >
                  <Link to="#" style={{ cursor: 'default' }} onClick={(e) => e.preventDefault()}>PRODUCTS</Link>
                  <ul className='dropdown'>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/ses-izolasyonlu-konteynir.svg' alt='' />
                      </div>
                      <Link to="/ses-yalitimi">
                        Sound Proof Containers
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/voltaj.svg' alt='' />
                      </div>
                      <Link to="/dusuk-voltaj">
                      Low Voltage Panels
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/voltaj.svg' alt='' />
                      </div>
                      <Link to="/orta-voltaj">
                      Medium Voltage Panels
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/kurulum.svg' alt='' />
                      </div>
                      <Link to="/kurulum-montaj">
                      Installation Works
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/sismik_titresim.svg' alt='' />
                      </div>
                      <Link to="/sismik-titresim">
                        Seismic Vibration Pads
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/dıs_yakit.svg' alt='' />
                      </div>
                      <Link to="/dis-yakit">
                        External Fuel Tank
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/generator_icon.svg' alt='' />
                      </div>
                      <Link to="/yakit-tanki">
                        Fuel Tank Automation
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-link">
                  <Link to="#" style={{ cursor: 'default' }} onClick={(e) => e.preventDefault()}>GENERATORS</Link>
                  <ul className='dropdown'>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/generator_icon.svg' alt='' />
                      </div>
                      <Link to="/diesel-generator">
                        Diesel Generator
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/generator_icon.svg' alt='' />
                      </div>
                      <Link to="/gas-generator">
                        Gas Generator
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/generator_icon.svg' alt='' />
                      </div>
                      <Link to="/portable-generator">
                        Portable Generator
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/catalog">CATALOG</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
