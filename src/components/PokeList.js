import React, { Component } from 'react'
import '../App.css'
export default class PokeList extends Component {
    render() {
        return (
            <>
            <ul className='poke-mon'>

                { this.props.pokemons.length === 0
                ? <div><img className='load-ing' src='pokeball.png' alt='pokeball'/></div>
                : this.props.pokemons.map(pokemon => { return(
                <li className='pokemon' key={pokemon._id}>
                 <div className='pokemon-neem'>{pokemon.pokemon}</div>  <br></br> 
                 <img className='poke-pic'src={pokemon.url_image} alt={pokemon.pokemon}/><br></br>
                 <div className='pokemon-deets'>{pokemon.type_1}</div>
                 </li>
                )})}
                
            </ul> 
            </>
        )
    }
}
