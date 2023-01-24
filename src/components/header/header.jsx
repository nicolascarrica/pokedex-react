import React from "react";
import titlePokemon from "../../images/pokemon1.png"
import "./header.css"
import Spinner from "react-bootstrap/Spinner";

function Header () {

    return (
        <>
        <div>
            <header className="headerContent">
                <img src={titlePokemon} className="title-container" alt='titlePokemon'/>
            </header>
        </div>
        </>
    );
}

export default Header