import React, { Component } from 'react'
import BucketItem from './BucketItem'
export class Bucket extends Component {
    render() {
        return (
            <div className="bucket">
                {this.props.products.map(product => {
                   return <BucketItem title={product.title} dsc={product.dsc} img={product.image} url={product.url} ></BucketItem>
                })}
            </div>
        )
    }
}

export default Bucket
