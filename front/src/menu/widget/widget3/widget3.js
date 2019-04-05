import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer,
  Legend,
} from 'recharts';
import axios from 'axios';

export default class Widget3 extends PureComponent {
  state ={
    data01 : [
      {
        name: 'Page A', likes: 2400,
      },
      {
        name: 'Page B', likes: 1398, 
      },
      {
        name: 'Page C',  likes: 9800,
      },
      {
        name: 'Page D',  likes: 3908,
      },
      {
        name: 'Page E',  likes: 4800, 
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
           likes:track.likes
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
        
        // <ResponsiveContainer>
      <ComposedChart
     
      width={300} height={300}
        data={this.state.data01}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="likes" barSize={20} fill="#413ea0" />
        
      </ComposedChart>
    //   </ResponsiveContainer>
    );
  }
}
