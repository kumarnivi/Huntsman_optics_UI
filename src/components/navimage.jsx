import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const NavImage = () => {
    const containerStyle = {
        position: "relative",
        width: "100%",
        height: "400px",
    };

    const textStyle = {
        position: "absolute",
        top: "50%",
        left: "10%",
        transform: "translateY(-50%)",
        color: "black",
        textAlign: "left",
        fontSize:"50px"
    };

    const searchBarStyle = {
       
        display: "flex",
        alignItems: "center",
    };

    const searchIconStyle = {
        marginRight: "5px",
        width:"18px",
       
    };

    return (
        <div style={containerStyle}>
            <div style={textStyle}>
                <p >Hello Michal,</p>
                <p>Welcome to the portal</p>
                <div style={searchBarStyle}>
            <li class="search-container">
            <input
              type="text"
              name="search"
              placeholder="What whould you search ?"
              class="search-input"
            />
            <Link class="search-btn">
                <FontAwesomeIcon style={searchIconStyle} icon={faSearch}/>
            
            </Link>
          </li>
            </div>
            </div>
            <img src="/images/lap.jpg" alt="logo" style={{ width: "100%", height: "100%" }} />
        </div>
    );
}

export default NavImage;
