import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Widgetgen from "./widget/widgetgen";
import Formm from "./form/form";


export default()=>(
    <Switch>
        <Route path="/" exact component ={Widgetgen}/>
        <Route path="/form" exact component ={Formm}/>
    </Switch>
);