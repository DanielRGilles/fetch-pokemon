import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
        
                <>
                    {
                        this.props.options.map(optionName => 
                        <option key={optionName} value= {optionName}> {optionName.charAt(0).toUpperCase() + optionName.slice(1)}
                        </option>)
                    }
                    
                </>
            
        )
    }
}
     