import React, { Component } from 'react'
import Fabric from "./Fabric";

class Fabrics extends Component {
    render() {
        const {fabrics} = this.props;
        return (
            <div>
            {
             fabrics.map(fabric => {
                 return(
                     <Fabric 
                     key = {fabric.id}
                     fabric_type = {fabric.fabric_type }
                     price = {fabric.price}
                     length = {fabric.length}
                     
                     />
                 )
             })
    }
            </div>
        )
    }
}
export default Fabrics;