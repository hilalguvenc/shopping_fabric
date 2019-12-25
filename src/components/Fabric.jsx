import React, {Component} from 'react'
import photo_1 from '../photo/photo_1.jpg';
import photo_2 from '../photo/photo_2.jpg';
import photo_3 from '../photo/photo_3.jpg';
import photo_4 from '../photo/photo_4.jpg';
import photo_5 from '../photo/photo_5.jpg';
import photo_6 from '../photo/photo_6.jpg';
import photo_7 from '../photo/photo_7.jpg';
import photo_8 from '../photo/photo_8.jpg';
import photo_9 from '../photo/photo_9.jpg';
import photo_10 from '../photo/photo_10.jpg';
import photo_11 from '../photo/photo_11.jpg';
import photo_12 from '../photo/photo_12.jpg';
import photo_13 from '../photo/photo_13.jpg';
import photo_14 from '../photo/photo_14.jpg';
import photo_15 from '../photo/photo_15.jpg';

class Fabric extends Component {
     
    
    render() {
    
    const { fabric_type, price, length} = this.props;

    return (
        <div>
            <div className="card1">
            <img className="photo1" src={photo_1} alt=""/>
             <ul>
             <li >
             <h1 className="card-header">{ fabric_type }</h1>
             <p className="line">{ price }</p>
             <p className="line">{ length }</p>
             </li>
             </ul>
             </div>
         
         
         <div className="card2"> 
         <img className="photo2"  src={photo_2} alt=""/>
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         <p className="line">{ length }</p>
         </li>
         </ul> 
         </div>
         
        
         <div className="card3" >
         <img  className="photo3" src={photo_3}  alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         <p className="line">{ length }</p>
         </li>
         </ul>  
         </div>
         

         <div className="card4">
         <img className="photo4" src={photo_4} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         <p className="line">{ length }</p>
         </li>
         </ul> 
         </div>

        
         <div className="card5">
         <img className="photo5" src={photo_5} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>


         <div className="card6">
         <img className="photo6" src={photo_6} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>

      
         <div className="card7">
         <img className="photo7" src={photo_7} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>

      
         <div className="card8">
         <img className="photo8" src={photo_8} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>


         <div className="card9">
         <img className="photo9" src={photo_9} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>
        

         <div className="card10">
         <img className="photo10" src={photo_10} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>
        

         
         <div className="card11">
         <img className="photo11"src={photo_11} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>
        

         <div className="card12">
         <img className="photo12" src={photo_12} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>
        

         <div className="card13">
         <img className="photo13" src={photo_13} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>
        

         <div className="card14">
         <img className="photo14" src={photo_14} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div>


         <div className="card15">
         <img className="photo15" src={photo_15} alt="" />
         <ul>
         <li>
         <h1 className="card-header">{ fabric_type }</h1>
         <p className="line">{ price }</p>
         </li>
         </ul> 
         </div> 
          

            
         </div> 
    )
    
    }
}

export default Fabric;





