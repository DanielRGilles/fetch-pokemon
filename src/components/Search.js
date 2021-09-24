import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <>
                 <form onSubmit={this.props.handleSubmit}>
                <input type='text' placeholder={this.props.placeholder}  onChange={this.props.handleChange} />
                <button>Search</button>
            </form>
            </>
        )
    }
}
// value={this.props.query}