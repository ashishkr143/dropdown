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
                        <h2>Product Name</h2>
                        <h6>FINTECH</h6>
                    </div>
                    <p className="dsc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime blanditiis culpa obcaecati facere quod delectus facilis corporis, quos sequi minima repellendus at eveniet optio totam harum error
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
