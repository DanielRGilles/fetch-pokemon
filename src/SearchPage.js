import React, { Component } from 'react'
import './App.css';
import request from 'superagent';
import PokeList from './components/PokeList';
import Header from './components/Header';
import Sort from './components/Sort';
import Search from './components/Search';


export default class SearchPage extends Component {
   state = {
       sortOrder: 'asc',
       query: '',
       pokemon: [],
       pokePerpage: '20',
       isLoading: true,
       typeQ: 'pokemon',
       page: 1
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
    handleNextPageChange = async () => {
       await this.setState((prevState) =>  ({page: prevState.page +1 }))
        console.log(this.state.page)
       await this.fetchData();
    } 
    handlePreviousPageChange = async (e) => {
       if(this.state.page > 1) { this.setState((prevState) =>  ({page: prevState.page -1 }))}
       else alert('This is the first page')
        await this.fetchData();
        console.log(this.state.page)
    }
    handleSubmit = async (e) => {
            e.preventDefault();

        await this.setState({page: 1}) 
        this.fetchData();
    }
    handleTypeSubmit = async (e) => {
            e.preventDefault();
        await this.fetchData();
    }  
    fetchData = async() => {
            const search = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${this.state.typeQ}=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}&page=${this.state.page}&perPage=${this.state.pokePerpage}`)
            this.setState({ pokemon: search.body.results, isLoading: false });
    }
  
        
    render() {
        
        return (
            <main className='poke-cnt'>
              <Header/>
            <section className='search-box'>
              <Search handleSubmit={this.handleSubmit} placeholder={`Search by ${this.state.typeQ}`} handleChange={this.handleChange} handleTypeChange={this.handleTypeChange}/>
              <Sort pokemon={this.state.pokemon}handlePreviousPageChange={this.handlePreviousPageChange} handleNextPageChange={this.handleNextPageChange}  handleOrderChange={this.handleOrderChange} sortOrder={this.state.sortOrder} pokePerpage={this.state.pokePerpage} page={this.state.page}handleQuantityChange={this.handleQuantityChange}/>
            </section>
              <PokeList isLoading={this.state.isLoading} pokemons= {this.state.pokemon} />  
            </main>
        )
    }
}

