import React, { Component } from 'react'
import Dropdown from './Dropdown'
export default class Sort extends Component {
    render() {
        return (
            <>
                  <label>Order</label>
            <Dropdown  handleChange={this.props.handleOrderChange} value={this.props.sortOrder} options={[{optionName:'desc', display: 'Descending'}, {optionName:'asc', display: 'Ascending'}]} />
            <label>Results per page</label>
            <Dropdown  handleChange={this.props.handleQuantityChange} value={this.props.pokePerpage} options={[{optionName: 20, display:20}, {optionName: 50, display:50},{optionName: 100, display:100},{optionName: 200, display:200}]} />
            </>
        )
    }
}
