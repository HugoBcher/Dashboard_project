import React, { Component } from 'react';
import Menu from "./menu/menu";
import Routes from "./menu/route";
import { Link} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App-header" >
      <div className="tout">
            <div className="row">    
                  <div className="col-6">
                  <div className="text">
                   <Link to="/">Dashboard</Link>
                 </div></div>
                
                 <div className="col-6">
                 <div className="textt">
                    <Link to="/form">Formulaire</Link>
                    </div></div>
                </div>
              <Routes/>
              </div>
     
      
      </div>
    );
  }
}

export default App;

