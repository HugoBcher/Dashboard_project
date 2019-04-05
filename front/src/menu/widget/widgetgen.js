import React, { Component } from 'react';
import { Card } from 'reactstrap';
import Widget1 from "./widget1/widget1";
import Widget2 from "./widget2/widget2";
import Widget3 from "./widget3/widget3";
import Widget4 from "./widget4/widget4";
import Widget5 from "./widget5/widget5";
import Widget6 from "./widget6/widget6";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./widgetgen.css"



class Widgetgen extends Component {
  render() {
    return (
      <div className="App-header"  >
    
      <div className="widG">
       <div className="row" >
       <div className="wid1">
      <div className="col-lg-6 col-md-12" > <Widget1 Widget1={Widget1}/></div> 
        </div>

        <div className="wid1">
      <div className="col-lg-6 col-md-12">
      <h1 className="wid">Tracks les plus écoutés :</h1>
       <Widget2 Widget2={Widget2}/></div>
        </div>
        </div>
      
        <div className="row">
        <div className="wid1">
        <div className="col-lg-6 col-md-12"> 
        <h1 className="wid">Tracks les plus likés:</h1>
         <Widget3 Widget3={Widget3}/>
        </div>
    
       </div>
       <div className="wid1">
        <div className="col-lg-6 col-md-12"> 
         <Widget4 Widget4={Widget4}/>
         </div>
        </div>
     
      </div>
        <div className="row">
        <div className="wid1">
        <div className="col-lg-6 col-md-12"> 
      <Widget6 Widget6={Widget6}/>
         </div>
    
       </div>
       <div className="wid1">
        <div className="col-lg-6 col-md-12">  
        <h1 className="wid">Artistes et leurs followers :</h1>
         <Widget5 Widget5={Widget5}/>
        </div>
        </div>
     
      </div>
      </div>
</div>
       
      
     
      
    );
  }
}

export default Widgetgen;
