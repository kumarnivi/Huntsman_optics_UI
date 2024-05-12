import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
      <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
                <img src="./images/logohike.png" class="foot-logo" alt="footer-logo" />
              <div className="topic">About us</div>
              <p>
                CodingLab is a channel where you can learn HTML, CSS, and also
                JavaScript along with creative CSS Animations and Effects.
              </p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="contact-info">
              <div className="phone">
                <a href="#">
                    <FontAwesomeIcon icon={faPhoneVolume} style={{marginRight:"5px"}}/> +007 9089 6767
                </a>
                </div>
                <div className="email">
                <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"5px"}} /> abc@gmail.com
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">Employee Resource</div>
            <div>
              <a href="#">Xero</a>
            </div>
            <div>
              <a href="#">Company assets User policy</a>
            </div>
            <div>
              <a href="#">Sample employment contract</a>
            </div>
            <div>
              <a href="#">How to use Xero?</a>
            </div>
            <div>
              <a href="#">How to apply Leave?</a>
            </div>
          </div>
          <div className="right box">
            <div className="topic">Subscribe us</div>
            <form action="#">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name="" value="Send" />
              <div className="media-icons">
                <a target="_blank"  href="https://www.facebook.com/Thermalsimagingoceania/"><FontAwesomeIcon icon={faFacebook} /></a>
                <a target="_blank" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a target="_blank" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a target="_blank" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a target="_blank" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </form>
          </div>
        </div>
        <hr/>
        <div className="bottom">
          <p style={{textAlign: "center"}}>
            Copyright © 2024 <a target="_blank" href="https://www.huntsmanoptics.com/" >HuntsmanOptics</a> All rights reserved
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;