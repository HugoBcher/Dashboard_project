import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';





export default class Widget2 extends PureComponent {
  
  state ={
    data01 : [
      {
        name: 'Page A', ecoutes: 2400,
      },
      {
        name: 'Page B', ecoutes: 1398, 
      },
      {
        name: 'Page C',  ecoutes: 9800,
      },
      {
        name: 'Page D',  ecoutes: 3908,
      },
      {
        name: 'Page E',  ecoutes: 4800, 
      },
      
    ]
  }


  constructor (props){
    super(props);
    var data01 = [];
    var self = this;
    axios.get('http://localhost:3001/tracks').then(res => {
      console.log(res);
      res.data.forEach(track => {
       data01.push(
         {
           name:track.nom,
           ecoutes:track.nb_ecoutes
         }
       );
      });

   
    }).then(function(){
     self.setState({data01 :data01});
    }
    );


  }

  render() {
    return (
      <BarChart
        width={300}
        height={300}
        data={this.state.data01}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        
        <Legend />
        <Bar dataKey="ecoutes" barSize={20} fill="#8884d8" />
      </BarChart>
    );
  }
}
