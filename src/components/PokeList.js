import React, { Component } from 'react'
import '../App.css';
import PokeItem from './PokeItem';
export default class PokeList extends Component {
    render() {
        return (
            <>
            <ul className='poke-mon'>
                <PokeItem isLoading={this.props.isLoading} pokemons={this.props.pokemons}/>
            </ul> 
            </>
        )
    }
}
