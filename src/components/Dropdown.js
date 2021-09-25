import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
        
                <>

                <select onChange={this.props.handleChange}>
                    {
                        this.props.options.map(({display, optionName  }) => 
                        <option key={optionName} value= {optionName}> { display }
                        </option>)
                    }
                    </select>
                </>
            
        )
    }
}
// .typeof(Number) ? optionName : optionName.charAt(0).toUpperCase() + optionName.slice(1)

     