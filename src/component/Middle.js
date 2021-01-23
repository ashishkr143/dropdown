import React from 'react'
import Bucket from './Bucket/Bucket'

export default function Middle(props) {
    return (
        
        <div className="middle">
            <h1>My Bucket</h1>
            <Bucket products={props.products}></Bucket>
        </div>
    )
}
