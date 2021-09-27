import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeItem extends Component {
    render() {
        return (
            <>
                { this.props.isLoading
                ? <div><img className='load-ing' src='pokeball.png' alt='pokeball'/></div>
                : this.props.pokemons.map(pokemon => { return(
                <li className={pokemon.type_1 + ' pokemon'} key={pokemon._id}>
                 <div className='pokemon-neem'>{pokemon.pokemon}</div>  
                 <Link to={`/Detail/${pokemon._id}`}><img className='poke-pic'src={pokemon.url_image} alt={pokemon.pokemon}/></Link>
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
