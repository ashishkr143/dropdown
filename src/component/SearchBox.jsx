import React, { Component } from 'react'

export class SearchBox extends Component {
    render() {
        return (
            <div className="mt-2">
                <input type="text" className="form-control" placeholder="Enter text to search.."/>
            </div>
        )
    }
}

export default SearchBox
