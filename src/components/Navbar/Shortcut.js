import React from "react";
import "./Navbar.css";


function Shortcut(props) {
    return (
        <div className="header__option">
            <span className="navbar__optionLineOne">{props.title}</span>
        </div>
   );
}

export default Shortcut;