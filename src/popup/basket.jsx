import React from "react";

const basketBox = {
    backgroundColor: "white",
    padding: "20px",
    width: "1300px",
    height: "600px",
    
  }; 
  const BasketPopup = (props) => {
    return <div style={basketBox} className="basket-popup">
      <form>
      <button className="basket-close-popup" onClick={() => props.onClose()}>X</button>
      <hr/>
      
  
  
      </form>
    </div>
  };
  
  export {BasketPopup}