import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
        
                <>

                <select onChange={this.props.handleChange}>
                    {
                        this.props.options.map(optionName => 
                        <option key={optionName} value= {optionName}> { optionName }
                        </option>)
                    }
                    </select>
                </>
            
        )
    }
}
// .typeof(Number) ? optionName : optionName.charAt(0).toUpperCase() + optionName.slice(1)

     