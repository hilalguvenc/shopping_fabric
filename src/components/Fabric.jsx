import React, { Component } from 'react'
import "../styles/fabric.scss";

class Fabric extends Component {
    render() {
        const { fabric_type, price, length, image } = this.props;

        return (
            <div className="card">
                <div className="image-container">
                    <img className="image" src={image} alt={image} />
                </div>
                <div className="content">
                    <p>{fabric_type}</p>
                    <p>{price}</p>
                    <p>{length}</p>
                </div>
            </div>
        )
    }
}

export default Fabric;





