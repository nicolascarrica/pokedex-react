import React, { useState, useEffect } from "react";
import axios from "axios";
import "./showpokemon.css"
import  Spinner  from "../../images/pokeball-load.gif";

const typesColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};


function ShowPokemon(props) {
    const [loadingPokemon, setLoadingPokemon] = useState(true);
    const [pokemon, setPokemon] = useState(props.id);
    const [pokemonData, setPokemonData] = useState([]);
    
  
    useEffect(() => {
      setLoadingPokemon(true);
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`).then((res) => {
        const name = res.data.name;
        const id = res.data.id;
        const types = res.data.types.map((elem) => elem.type.name);
        const img = res.data.sprites.other["dream_world"].front_default;
        const nameStat= res.data.stats.map((elem) => elem.stat.name);
        const numberStat = res.data.stats.map((elem) => elem.base_stat);
        setPokemonData({ name, id, types, img, nameStat, numberStat });
        setLoadingPokemon(false);
        setPokemon(pokemon);
       
    })
    .catch((error) => {
        console.log(error);
    });
    
    }, [pokemon]);

    if (loadingPokemon === true) return (
        <div className='card-container'>
            <div className='poke-card'>
            <img
                src={Spinner}
                alt="Loading"
                className="loading-image"
            />
        </div>
        </div>
    )
    if (loadingPokemon === false) return(
    <>
    <div className='card-container'>
        <div className='poke-card'>
            <div className="poke-nombre">
                <strong>{pokemonData.name}</strong>
            </div>
            <img
                src={pokemonData.img || Spinner}
                alt="Pokemon"
                className="pokemon-image"
            />
            <div className='poke-id'>
                <strong>{`N° ${(pokemonData.id)}`}</strong>
            </div>
            <div className='poke-type'>
                <ul className='type-list'>
                    {pokemonData.types.map((type)=> (
                        <ul key={type} style={{backgroundColor: typesColors[type]}} >{type}</ul>
                    ))}
                </ul>
            </div>
            <div className='poke-stats'>
                <div className='stat-name'>
                    {pokemonData.nameStat.map((nameStat)=> (
                        <div key={nameStat}>{nameStat} </div>
                    ))}
                </div>
                <div className='stat-number'>
                    {pokemonData.numberStat.map((numberStat, index) => (
                        <div key={index}>{numberStat}</div>
                        ))}
                </div>
            </div>
        </div>
    </div>
    </>
    );

}

export default ShowPokemon;