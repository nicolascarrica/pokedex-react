import React, { useState, useEffect } from "react";
import "./showpokemon.css";
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
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(response => response.json())
        .then(json => {
            const name = json.name
            const img = json.sprites.other["dream_world"].front_default;
            const id = json.id
            const types = json.types.map((elem) => elem.type.name);
            const nameStat= json.stats.map((elem) => elem.stat.name);
            const numberStat = json.stats.map((elem) => elem.base_stat);
            setPokemonData({name, id, img, types, nameStat, numberStat})
            setPokemon(pokemon)   
            setLoadingPokemon(false)
        })
        .catch((error) => {
            console.log(error);
         });
    }, [pokemon])

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