import React, { Component } from 'react'
import '../App.css'
export default class DetailPokemon extends Component {
    render() {
        return (
        
            <>
                { this.props.isLoading
                ? <img className='load-ing-det' src='../pokeball.png' alt='pokeball'/>
                : <div> <div className='title-parent'><h3 className='pokemon-title'>{this.props.details.pokemon.toUpperCase()}</h3></div> 
                <div className='image-parent'><img className='poke-pic'src={this.props.details.url_image} alt={this.props.details.pokemon}/></div>  
                <div className='pokemon-deets'>Type:{this.props.details.type_1}</div>
                 <div className='pokemon-deets'>Attack:{this.props.details.attack}</div>
                 <div className='pokemon-deets'>SP. Attack:{this.props.details.special_attack}</div>
                 <div className='pokemon-deets'>Defense:{this.props.details.defense}</div>
                 <div className='pokemon-deets'>SP. Defense:{this.props.details.special_defense}</div>
                 <div className='pokemon-deets'>HP:{this.props.details.hp}</div> 
                 <div className='pokemon-deets'>Speed:{this.props.details.speed}</div> 
                 <div className='pokemon-deets'>Height:{this.props.details.height}</div> 
                 <div className='pokemon-deets'>Weight:{this.props.details.weight}</div> 
                 <div className='pokemon-deets'>First Ability:{this.props.details.ability_1}</div> 
                 <div className='pokemon-deets'>Second Ability:{this.props.details.ability_2}</div> 
                 <div className='pokemon-deets'>Hidden Ability:{this.props.details.ability_hidden}</div> 
                 <div className='pokemon-deets'>Shape:{this.props.details.shape}</div> 
                </div>  }
            </>
            
        )
    }
}
