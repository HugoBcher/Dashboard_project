import React, { PureComponent } from 'react';
import './widget4.css';
import AlbumsList from './get/widGet';


export default class Widget4 extends PureComponent {
 

  render() {
    return (
      <div className="wid">
      <h1>Liste de tous les albums :</h1>
      <AlbumsList/>
      </div>
    );
  }
}
