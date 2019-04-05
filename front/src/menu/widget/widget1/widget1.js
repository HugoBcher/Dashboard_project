import React, { PureComponent } from 'react';
import './widget1.css';
import ArtistsList from './get/widGet';


export default class Widget1 extends PureComponent {
 

  render() {
    return (
      <div className="wid">
      <h1>Liste de tous les artistes :</h1>
      <ArtistsList/>
      </div>
    );
  }
}
