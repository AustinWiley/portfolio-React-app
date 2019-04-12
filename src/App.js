import React, { Component } from 'react';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import projects from "./projects.json";
import './App.css';

class App extends Component {

  //sets state to projects json
  state = {
    projects
  };

  render() {
    return (
      <>
      <Nav />
      <div className="container">
        <div className="section">
          <div className="row columns"> 
            {this.state.projects.map(character => (
            <Card
            imageClick={this.imageClick}
            id={character.id}
            key={character.id}
            image={character.image}
            />
            ))}
          </div>  
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default App;