import React, { Component} from 'react';
import "./styles/style.scss";
import Popup from "./components/Popup";
import Fabrics from "./components/Fabrics";

 

 class App extends Component {
   state = {
     fabrics : [
    {
      id : 1 ,
      fabric_type : "ŞİŞME MONT",
      price : "20 TL",
      length : "3 METRE"
    },
    {
      id : 2 ,
      fabric_type : "KIŞLIK KAŞE",
      price : "30 TL",
      length : "5 METRE"
    },
    {
      id : 3 ,
      fabric_type : "KREP ",
      price : "40 TL",
      length : "5 METRE"
    },
    {
      id : 4 ,
      fabric_type : "İNCE KUMAŞ",
      price : "40 TL",
      length : "5 METRE"
    },
  ]
}

  render() {

    return (

      <div>

      
      <Popup />
      <Fabrics fabrics = {this.state.fabrics} />


      </div>
    )
  }
}
export default App;


  
        
          
        
        
        
           