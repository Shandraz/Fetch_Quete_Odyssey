import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateSimpson from './GenerateSimpson';
import DisplaySimpson from './DisplaySimpson';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    //   // on peut mettre notre sampleSimpson par défaut
    //   // afin d'avoir toujours un simpson d'affiché
      simpson: 
        {
         "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
         "character": "Nelson Muntz",
         "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
         "characterDirection" : "Left"
        }
      
    };

    
  }

  getSimpson() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpson: data[0],
        });
      });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        <GenerateSimpson  selectSimpson={() =>  this.getSimpson()}  />
        <DisplaySimpson  simpson={this.state.simpson}  />

      </div>
    );
  }
}

export default App;
