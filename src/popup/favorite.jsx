import React from "react";

const favoriteBox = {
    backgroundColor: "white",
    padding: "20px",
    width: "1300px",
    height: "600px",
    
  }; 
  const FavoritePopup = (props) => {
    return <div style={favoriteBox} className="favorite-popup">
      <form>
      <button className="favorite-close-popup" onClick={() => props.onClose()}>X</button>
      <hr/>
      
  
  
      </form>
    </div>
  };
  
  export {FavoritePopup}