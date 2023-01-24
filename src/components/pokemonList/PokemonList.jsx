import React, { useState, useEffect } from "react";
import axios from "axios";
import pokeball from "../../images/pokebola-2.png"
import Paginator from "../pagination/Paginator";
import "./pokemonlist.css"
import  Modal  from "../modal/Modal";



function PokemonList() {
   const [pokemons, setPokemons] = useState([]);
   const [infoPage, setInfoPage] = useState({});
   const [pokemonNumber, setPokemonNumber] = useState(null);
   const [modalVisibility, setModalVisibility] = useState(false)

   const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

   const fetchPokemonList = (url) => {

       axios
       .get(url)
       .then((data) => {
        setPokemons(data.data.results);
        setInfoPage(data.data);
        })
       .catch((error) => {
           console.log(error);
        });

    }

   useEffect(() => {
       
        fetchPokemonList(url);
        
     }, []);

         
    const onPrevious = () =>{
        fetchPokemonList(infoPage.previous);
      };
  
      const onNext = () =>{
        fetchPokemonList(infoPage.next);
      };
   
 
      const viewPopUp = (e) => {
        const idPokemon = e.target.id
        setPokemonNumber(idPokemon)
        setModalVisibility(true)
      }

    return (
      <>
      <div>
        <Paginator previous={infoPage.previous} next={infoPage.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
      
      <div className="list-container">
          <div className="name-list-container">
            {pokemons.map((element) => (
              <div className="name-list" id={element.name} key={element.name} onClick={viewPopUp}>
                <img src={pokeball} alt="pokeball" className="pokeball-image"/>
                {element.name}
              </div>))}
          </div>            
        </div>

        <Modal trigger={modalVisibility} setTrigger={setModalVisibility} id={pokemonNumber}/>
      </>
    );
  }
  
  export default PokemonList;