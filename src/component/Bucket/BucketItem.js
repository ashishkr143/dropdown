import React, { Component } from 'react'

export class BucketItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="bucket-item">
                <div className="image">
                    <img src={this.props.img}></img>
                </div>
                <div className="content">
                    <div className="top">
                        <h2>{this.props.title}</h2>
                        <h6>FINTECH</h6>
                    </div>
                    <p className="dsc">
                    {this.props.dsc}... <a href={this.props.url} target="_blank">Read More</a>
                    </p>
                    <div className="bottom">
                        <div> <i className="fa fa-comments"></i> <span>0 Comments</span> </div>
                        <div> <i className="fa fa-shopping-basket"></i> <span>2 Buckets</span> </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BucketItem
