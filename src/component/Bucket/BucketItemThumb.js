import React, { Component } from 'react'
import { Fragment } from 'react'

export class BucketItem extends Component {
    render() {
        return (
            <div className="bucket-item">
                <div className="image">
                    <img src="https://picsum.photos/id/1081/200/200"></img>
                </div>
                <div className="content">
                    <div className="top">
                        <h2>Product Name</h2>
                       
                        
                    </div>


                   
                   
                </div>
            </div>
        )
    }
}

export default BucketItem
