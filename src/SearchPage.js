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
       pokemon: [],
       pokePerpage: '20'
   }
 componentDidMount = async () => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=20`)
        this.setState({pokemon: response.body.results})
    } 
    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }
    handleQuantityChange = (e) => {
        this.setState({ pokePerpage: e.target.value});
    }
    handleOrderChange = (e) => {
        this.setState({ sortOrder: e.target.value });
        
    }
    
    handleSubmit = async (e) => {
            e.preventDefault();
            const search = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}page=1&perPage=${this.state.pokePerpage}`)
            this.setState({ pokemon: search.body.results});
        }
        
    render() {
        console.log(this.state.pokemon)
        return (
            <main className='poke-cnt'>
              <Header/>
            <section className='search-box'>
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.query} onChange={this.handleChange} />
                <button>Search</button>
            </form>
            <label>Order</label>
            <Dropdown  handleChange={this.handleOrderChange} options={['desc', 'asc']} />
            <label>Results per page</label>
            <Dropdown  handleChange={this.handleQuantityChange} options={[20, 50, 100, 200]} />
            </section>
            <PokeList pokemons= {this.state.pokemon} />  
            </main>
        )
    }
}

