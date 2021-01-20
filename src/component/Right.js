import React from 'react'
import BucketItemThumb from './Bucket/BucketItemThumb'

export default function Right() {
    return (
        <div className="right">
            <h6>Product Posted</h6>
            <BucketItemThumb></BucketItemThumb>
            <BucketItemThumb></BucketItemThumb>
            <BucketItemThumb></BucketItemThumb>

            <button className="btn">Post More Products</button>
        </div>
    )
}
