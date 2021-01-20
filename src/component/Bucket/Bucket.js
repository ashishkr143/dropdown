import React, { Component } from 'react'
import BucketItem from './BucketItem'
export class Bucket extends Component {
    render() {
        return (
            <div className="bucket">
                <BucketItem></BucketItem>
                <BucketItem></BucketItem>
                <BucketItem></BucketItem>
                <BucketItem></BucketItem>
            </div>
        )
    }
}

export default Bucket
