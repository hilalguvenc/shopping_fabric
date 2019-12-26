import React, { Component } from 'react';
import Popup from "./components/Popup";
import Fabrics from "./components/Fabrics";
import axios from 'axios';


class App extends Component {
  state = {
    fabrics: [],
  }

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/fabrics")
    this.setState({
      fabrics: response.data
    })
  }

  render() {

    return (

      <div>


        <Popup />
        <Fabrics fabrics={this.state.fabrics} />


      </div>
    )
  }
}
export default App;








