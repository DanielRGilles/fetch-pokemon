import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
             <header className='header-class'>
                 Find Your Pokemon
                 <nav className='nav-link'><a href='/'>Link to</a> <a  href='/Gallery'>Link to Gallery</a></nav>
            </header>   
            </>
        )
    }
}