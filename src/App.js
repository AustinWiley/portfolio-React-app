import React, { Component } from 'react';
import Nav from "./components/Nav";
import Flow from "./components/Flow";
import Hero from "./components/Hero";
import Card from "./components/Card";
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
      <Flow />
      <Hero />
      <div className="container">
        <div className="section">
        <h1 className="has-text-centered portfolio-title"> - Portfolio -</h1>
        <br />
          <div className="row columns is-multiline"> 
            {this.state.projects.map(project => (
            <Card
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
            otherLink={project.otherLink}
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