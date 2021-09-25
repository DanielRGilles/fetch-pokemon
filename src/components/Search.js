import React, { Component } from 'react'
import Dropdown from './Dropdown'
export default class Search extends Component {
    render() {
        return (
            <>
                 <form onSubmit={this.props.handleSubmit}>
                    <input type='text' placeholder={this.props.placeholder}  onChange={this.props.handleChange} />
                    <Dropdown handleChange={this.props.handleTypeChange} value={this.props.typeQ} options={[{optionName:'pokemon', display:'By Name'}, {optionName:'type_1', display:'Type'}]} />
                    <button>Search</button>
                </form>
            </>
        )
    }
}
// value={this.props.query}