import React, { Component } from 'react'

export class Left extends Component {
    render() {
        return (
            <div className="left">
            <div className="image">
            <img src={this.props.avatar}/>
            </div>
            <h1>{this.props.name}</h1>
            <h4>{this.props.nickName}</h4>
            <h5>{this.props.company}</h5>
            
            <p>
            {this.props.about}
            </p>
        </div>
        )
    }
}

export default Left
