import React from "react";

const orderBox = {
    backgroundColor: "white",
    padding: "20px",
    width: "1300px",
    height: "600px",
    
  }; 
  const OrderPopup = (props) => {
    return <div style={orderBox} className="order-popup">
      <form>
      <button className="order-close-popup" onClick={() => props.onClose()}>X</button>
      <hr/>
      
  
  
      </form>
    </div>
  };
  
  export {OrderPopup}