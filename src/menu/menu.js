import React, { Component } from 'react';
import Widgetgen from "./widget/widgetgen";
import Navabarr from "./navbar/navbar";
import Formm from "./form/form";
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';



class Menu extends Component {
  render() {
    return (
      <div className="App-header" >
      
     
       <Widgetgen Widgetgen={Widgetgen}/>
      
      </div>
    );
  }
}

export default Menu;
