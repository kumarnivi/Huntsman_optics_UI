import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faLink,
  faStream,
  faCalendar,
  faQuestionCircle,
  faEnvelope,
  faStickyNote,
  faSearch,
  faHouse,
  faChevronDown,
  faChevronUp,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";




const Navbar = () => {

  const searchBarStyle = {
    position: "absolute",
    top: "50%",
    right: "10%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    marginRight:"-115px",
   
};



  const logoStyle = {
    height: "40px",
    marginLeft: "20px",
  };


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 

  const handleMenuHover = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <div  onMouseEnter={handleMenuHover}>
            <input type="checkbox" id="check" />
            <label for="check" style={{cursor:"pointer"}}>
              <i className="bi bi-list menu" style={{ color: "#fff" }}></i>
            </label>
            <div style={searchBarStyle}>
            <li class="search-container">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              class="search-input"
              style={{color:"#ffff"}}
            />
            <Link class="search-btn">
                <FontAwesomeIcon icon={faSearch}/>
            </Link>
          </li>
          <li style={{marginTop:"-23px", marginLeft:"20px"}}>
          <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '35px', color:"#ffff" }} />
          </li>
        
            </div>

            {isSidebarOpen && (
              <div className="sidebar" onMouseLeave={handleSidebarClose}>
                <Link to="/" className="menu_links">
                  <FontAwesomeIcon icon={faHouse} />
                  <span style={{ marginLeft: "10px" }}>Home</span>
                </Link>
                <Link to="" className="menu_links">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  <span style={{ marginLeft: "10px" }}>News & updates</span>
                </Link>
                <Link to="/social" className="menu_links">
                  <FontAwesomeIcon icon={faStickyNote} />
                  <span style={{ marginLeft: "10px" }}>
                    Social Huntsman optics
                  </span>
                </Link>
                <Link to="" className="menu_links" onClick={toggleDropdown}   style={{ display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faStream} />
                  <span style={{ marginLeft: "10px" }}>Business Sub-brand</span>
                  <FontAwesomeIcon
                    icon={isDropdownOpen ? faChevronUp : faChevronDown}
                    style={{ marginLeft: "25px",verticalAlign:"middle" }}
                  />
                </Link>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {/* Add your dropdown content here */}
                    <Link to="/business" className="menu_links">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span style={{ marginLeft: "10px" }}>
                        Huntsman Theremography{" "}
                      </span>
                    </Link>
                    <Link className="menu_links">
                      <FontAwesomeIcon icon={faQuestionCircle} />
                      <span style={{ marginLeft: "10px" }}>Coast Outdoor</span>
                    </Link>
                    <Link target="_blank"  rel="noopener noreferrer"  to="http://www.outdoordemodeals.com/" className="menu_links">
                      <FontAwesomeIcon icon={faQrcode} />
                      <span style={{ marginLeft: "10px" }}>
                        Outdoor demo deals
                      </span>
                    </Link>
                    <Link target="_blank"  rel="noopener noreferrer" to="https://web.facebook.com/people/Speras-Flashlights-AuNZ/61553121941505/" className="menu_links">
                      <FontAwesomeIcon icon={faQrcode} />
                      <span style={{ marginLeft: "10px" }}>
                        SperosFlashlight & lightning
                      </span>
                    </Link>
                  </div>
                )}
                <Link className="menu_links">
                  <FontAwesomeIcon icon={faLink} />
                  <span style={{ marginLeft: "10px" }}>Employee resource</span>
                </Link>
                <Link className="menu_links">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span style={{ marginLeft: "10px" }}>Contact us</span>
                </Link>
              </div>
            )}
          </div>

          <img src="./images/logo_02.png" style={logoStyle} alt="logo" />
          
        </div>

      
      </nav>
    </div>
  );
};

export default Navbar;
