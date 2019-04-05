import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import axios from 'axios';





export default class Widget5 extends PureComponent {
  

  state ={
    
   data01 : [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ]
   
   }

   constructor (props){
     super(props);
     var data01 = [];
     var self = this;
     axios.get('http://localhost:3001/artists').then(res => {
       console.log(res);
       res.data.forEach(artist => {
        data01.push(
          {
            name:artist.nom,
            value:artist.followers
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
      
      <PieChart width={300} height={300}>
        <Pie dataKey="value" isAnimationActive={false} data={this.state.data01} cx={175} cy={120} outerRadius={80} fill="#8884d8" label />

        <Tooltip />
      </PieChart>
    );
  }
}
