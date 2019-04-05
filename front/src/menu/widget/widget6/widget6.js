import React, { PureComponent } from 'react';
import './widget6.css';
import TracksList from './get/widGet';


export default class Widget6 extends PureComponent {
 

  render() {
    return (
      <div className="wid">
      <h1>Liste de tous les tracks :</h1>
      <TracksList/>
      </div>
    );
  }
}
