import React, { Component } from 'react'

export class BucketItem extends Component {
    render() {
        return (
            <div className="bucket-item">
                <div className="image">
                    <img src="https://picsum.photos/id/1081/200/200"></img>
                </div>
                <div className="content">
                    <div className="top">
                        <h2>{this.props.title}</h2>
                        <h6>FINTECH</h6>
                    </div>
                    <p className="dsc">
                    {this.props.dsc}
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
