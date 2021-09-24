import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <>
                { this.props.isLoading
                ? <div><img className='load-ing' src='pokeball.png' alt='pokeball'/></div>
                : this.props.pokemons.map(pokemon => { return(
                <li className={pokemon.type_1 + ' pokemon'} key={pokemon._id}>
                 <div className='pokemon-neem'>{pokemon.pokemon}</div>  
                 <img className='poke-pic'src={pokemon.url_image} alt={pokemon.pokemon}/>
                 <div className='pokemon-deets'>Type:{pokemon.type_1}</div>
                 <div className='pokemon-deets'>Attack:{pokemon.attack}</div>
                 <div className='pokemon-deets'>Defense:{pokemon.defense}</div>
                 <div className='pokemon-deets'>HP:{pokemon.hp}</div>
                 </li>
                )})}
            </>
        )
    }
}
