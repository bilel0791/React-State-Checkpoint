import b from './bilel.jpeg'; // Importe  depuis le fichier l

import './App.css';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'; // Importe les composants Card et Button depuis react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Bilel Benltaief', // Nom complet de la personne
      bio: 'full stack js at gomycode', // Biographie de la personne
      imgSrc: b, // Source de l'image
      profession: 'full stack js', // Profession de la personne
    },
    show: false, // État pour afficher ou masquer le profil
    intervalId: null, // ID de l'intervalle utilisé pour mettre à jour l'heure de montage
    mountedTime: null, // Heure de montage du composant
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);

    this.setState({ intervalId, mountedTime: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div>

        <Button onClick={this.toggleShow}>
          {// button pour afficher ou masquer le profil
            show ? 'Masquer le profil' : 'Afficher le profil'}
        </Button>
        {show && (
          //carte pour afficher les detaill de profile
          <Card style={{ width: '18rem', marginTop: '20px' }}>
            <Card.Img variant="top" src={imgSrc} alt={fullName} />
            <Card.Body>
              <Card.Title>{fullName}</Card.Title>
              <Card.Text>{bio}</Card.Text>
              <Card.Text>{profession}</Card.Text>
            </Card.Body>
          </Card>
        )}
        <h4>Heure de montage : {mountedTime && mountedTime.toLocaleTimeString()}</h4>
      </div>
    );
  }
}

export default App;