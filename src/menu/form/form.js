import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './form.css'

export default class Formm extends React.Component {
  render() {
    return (
      <div className="App-header" >
      <div className="row">
      <div className="col-4">
      <Form>
        <h1>Artist</h1>
        <FormGroup>
          <Label for="NomA">Nom</Label>
          <Input   id="NomA"  />
        </FormGroup>
        <FormGroup>
          <Label for="BirthA">Birth</Label>
          <Input  id="BirthA"  />
        </FormGroup>
        <FormGroup>
          <Label for="FollowersA">Followers</Label>
          <Input   id="FollowersA"  />
        </FormGroup>
        <FormGroup>
          <Label for="AlbumA">Album</Label>
          <Input  id="AlbumA"  />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
      </div>
      <div className="col-4">
      <Form>
        <h1>Album</h1>
        <FormGroup>
          <Label for="TitleAl">Title</Label>
          <Input   id="TitleAl"  />
        </FormGroup>
        <FormGroup>
          <Label for="ReleaseAl">Release</Label>
          <Input  id="ReleaseAl"  />
        </FormGroup>
        <FormGroup>
          <Label for="GenreAl">Genre</Label>
          <Input   id="GenreAl"  />
        </FormGroup>
        <FormGroup>
          <Label for="Cover_ulAl">Cover_ul</Label>
          <Input  id="Cover_ulAl"  />
        </FormGroup>
        <FormGroup>
          <Label for="TrackAl">Tack</Label>
          <Input  id="TrackAl"  />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
      </div>
      <div className="col-4">
      <Form>
        <h1>Track</h1>
        <FormGroup>
          <Label for="TitleT">Title</Label>
          <Input   id="TitleT"  />
        </FormGroup>
        <FormGroup>
          <Label for="DurationT">Duration</Label>
          <Input  id="DurationT"  />
        </FormGroup>
        <FormGroup>
          <Label for="ListeningsT">Listenings</Label>
          <Input   id="ListeningsT"  />
        </FormGroup>
        <FormGroup>
          <Label for="LikesT">Likes</Label>
          <Input  id="LikesT"  />
        </FormGroup>
        <FormGroup>
          <Label for="FeaturesT">Features</Label>
          <Input  id="FeaturesT"  />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
      </div>
      </div>
      </div>
    );
  }
}