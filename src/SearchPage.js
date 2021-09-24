import React, { Component } from 'react'
import './App.css';
import request from 'superagent';
import PokeList from './components/PokeList';
import Header from './components/Header';
import Sort from './components/Sort';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

export default class SearchPage extends Component {
   state = {
       sortOrder: 'asc',
       query: '',
       pokemon: [],
       pokePerpage: '20',
       isLoading: true,
       typeQ: 'pokemon'
   }
    componentDidMount = async () => {
         await this.fetchData();
    } 
    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }
    handleTypeChange = (e) => {
        this.setState({ typeQ: e.target.value });
    }
    handleQuantityChange = (e) => {
        this.setState({ pokePerpage: e.target.value});
    }
    handleOrderChange = (e) => {
        this.setState({ sortOrder: e.target.value });    
    } 

    handleSubmit = async (e) => {
            e.preventDefault();
        await this.fetchData();
    }
    handleTypeSubmit = async (e) => {
            e.preventDefault();
        await this.fetchData();
    }  
    fetchData = async() => {
            const search = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${this.state.typeQ}=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}page=1&perPage=${this.state.pokePerpage}`)
            this.setState({ pokemon: search.body.results, isLoading: false});
    }
  
        
    render() {
        console.log(this.state.pokemon)
        return (
            <main className='poke-cnt'>
              <Header/>
            <section className='search-box'>
              <Search handleSubmit={this.handleSubmit} placeholder={`Search by ${this.state.typeQ}`} handleChange={this.handleChange} />
              <Dropdown handleChange={this.handleTypeChange} value={this.state.typeQ} options={['pokemon','type_1',]} />
              <Sort handleOrderChange={this.handleOrderChange} sortOrder={this.state.sortOrder} pokePerpage={this.state.pokePerpage} handleQuantityChange={this.handleQuantityChange}/>
            </section>
              <PokeList isLoading={this.state.isLoading} pokemons= {this.state.pokemon} />  
            </main>
        )
    }
}

