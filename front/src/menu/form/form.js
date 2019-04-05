import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './form.css'

export default class Formm extends React.Component {


  //axios pour artiste
  state = {
    nom: '',
    birth: '',
    followers: 0,
    date: '',
    genre: '',
    cover_picture_url:'',
    durée: 0,
    nb_ecoutes: 0,
    likes: 0
  }

  handleChange = event => {
    this.setState({ nom: event.target.value });
  }
  handleChange1 = event => {
    this.setState({ birth: event.target.value });
  }
  handleChange2 = event => {
    this.setState({ followers: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    var artists = {
      nom: this.state.nom,
      birth: this.state.birth,
      followers: this.state.followers
    };

    axios.put('http://localhost:3001/artists', artists )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  //axios pour Album


  handleChange3 = event => {
    this.setState({ nom: event.target.value });
  }
  handleChange4 = event => {
    this.setState({ date: event.target.value });
  }
  handleChange5 = event => {
    this.setState({ genre: event.target.value });
  }
  handleChange6 = event => {
    this.setState({ cover_picture_url: event.target.value });
  }

  handleSubmit1 = event => {
    event.preventDefault();
    
    var albums = {
      nom: this.state.nom,
      date: this.state.date,
      genre: this.state.genre,
      cover_picture_url: this.state.cover_picture_url,
  
    };

    axios.put('http://localhost:3001/albums', albums )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  //axios titre


  handleChange7 = event => {
    this.setState({ nom: event.target.value });
  }
  handleChange8 = event => {
    this.setState({ durée: event.target.value });
  }
  handleChange9 = event => {
    this.setState({ nb_ecoutes: event.target.value });
  }
  handleChange10 = event => {
    this.setState({ likes: event.target.value });
  }

  handleSubmit2 = event => {
    event.preventDefault();
    
    var tracks = {
      nom: this.state.nom,
      durée: this.state.durée,
      nb_ecoutes: this.state.nb_ecoutes,
      likes: this.state.likes,
  
    };

    axios.put('http://localhost:3001/tracks', tracks )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }





  render() {
    return (
        
    
  
          <div className="App-header" >
          <div className="row">
          <div className="col-4">
          <Form onSubmit={this.handleSubmit}>
            <h1>Artist</h1>
            <FormGroup>
              <Label for="NomA">Nom</Label>
              <Input   id="NomA" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="BirthA">Birth</Label>
              <Input  id="BirthA" onChange={this.handleChange1} />
            </FormGroup>
            <FormGroup>
              <Label for="FollowersA">Followers</Label>
              <Input   id="FollowersA" onChange={this.handleChange2} />
            </FormGroup>
         
    
            <Button>Submit</Button>
          </Form>
          </div>
          <div className="col-4">
          <Form onSubmit={this.handleSubmit1}>
            <h1>Album</h1>
            <FormGroup>
              <Label for="TitleAl">Title</Label>
              <Input   id="TitleAl" onChange={this.handleChange3} />
            </FormGroup>
            <FormGroup>
              <Label for="ReleaseAl">Release</Label>
              <Input  id="ReleaseAl" onChange={this.handleChange4} />
            </FormGroup>
            <FormGroup>
              <Label for="GenreAl">Genre</Label>
              <Input   id="GenreAl" onChange={this.handleChange5} />
            </FormGroup>
            <FormGroup>
              <Label for="Cover_ulAl">Cover_ul</Label>
              <Input  id="Cover_ulAl" onChange={this.handleChange6} />
            </FormGroup>
          
    
            <Button>Submit</Button>
          </Form>
          </div>
          <div className="col-4">
          <Form onSubmit={this.handleSubmit2}>
            <h1>Track</h1>
            <FormGroup>
              <Label for="TitleT">Title</Label>
              <Input   id="TitleT" onChange={this.handleChange7} />
            </FormGroup>
            <FormGroup>
              <Label for="DurationT">Duration</Label>
              <Input  id="DurationT" onChange={this.handleChange8} />
            </FormGroup>
            <FormGroup>
              <Label for="ListeningsT">Listenings</Label>
              <Input   id="ListeningsT" onChange={this.handleChange9} />
            </FormGroup>
            <FormGroup>
              <Label for="LikesT">Likes</Label>
              <Input  id="LikesT"  onChange={this.handleChange10}/>
            </FormGroup>
            
    
            <Button>Submit</Button>
          </Form>
          </div>
          </div>
          </div>
        );
      }
    }
