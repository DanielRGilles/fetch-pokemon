import React, { Component } from 'react'
import './App.css';
import request from 'superagent';
import PokeList from './components/PokeList';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
export default class SearchPage extends Component {
   state = {
       sortOrder: 'asc',
       query: '',
       pokemon: []
   }
 componentDidMount = async () => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=20&direction=${this.state.sortOrder}`)
        this.setState({pokemon: response.body.results})
    } 
    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }
    handleOrderChange = (e) => {
        this.setState({ sortOrder: e.target.value });
        
    }
    
    handleSubmit = async (e) => {
            e.preventDefault();
            const search = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}`)
            this.setState({ pokemon: search.body.results});
        }
        
    render() {
        console.log(this.state.pokemon)
        return (
            <main className='poke-cnt'>
              <Header/>
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.query} onChange={this.handleChange} />
                <button>Search</button>
            </form>
            <label>Order</label>
        <select onChange={this.handleOrderChange}>
        <Dropdown options={['desc', 'asc']} />
         </select>
              <PokeList pokemons= {this.state.pokemon} />  
            </main>
        )
    }
}

