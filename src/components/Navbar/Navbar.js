import React from "react";
import "./Navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import Shortcut from './Shortcut';

const shortcutDataList = ["Ofertas del Dia", "Servicio al cliente", "Tarjetas de Regalo", "Listas", "Vender", "Prueba"];

function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar__optionMenu">
                <MenuIcon />
                <span className="header__optionLineTwo header__basketCount">
                    Todo
                </span>
            </div>

            <div className="navbar__nav">

                {
                    shortcutDataList.map((element,i) => (
                        <Shortcut key={i} title={element} />
                    ))
                }

            </div>
        </div>
    );
}

export default Navbar;