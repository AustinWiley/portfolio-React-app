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
          <div className="row columns is-multiline"> 
            {this.state.projects.map(project => (
            <Card
            // imageClick={this.imageClick}
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
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