import React from "react";
import ShowPokemon from "../showpokemon/ShowPokemon";
import "./modal.css"

function Modal(props) {
    return props.trigger ? (
      <>
      <div className="modal-background" onClick={() => props.setTrigger(false)}>
        <div className="modal-container"  style={{ display: "flex" }}>
          <div className="modal">
            <ShowPokemon id={props.id}/>
          </div>
        </div>
      </div>
      </>
    ) : (
      ""
    );
  }
  
  export default Modal