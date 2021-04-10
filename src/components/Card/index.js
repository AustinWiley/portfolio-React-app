import React from "react";

function Card(props) {
    return(
        <div className="column is-one-quarter">
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={props.image} alt="project img" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4 no-padding">{props.title}</p>
                    </div>
                </div>
                <div className="description">
                        {props.description}
                    <div className="background-icon"><span className="icon-twitter"></span></div>
                </div>
            </div>
        <footer className="card-footer"><a target="_blank" rel="noopener noreferrer" href={props.githubLink ? props.githubLink :  props.otherLink} className="card-footer-item">{props.githubLink ? "Github" : "Press"}</a> <a target="_blank" rel="noopener noreferrer" href={props.deployedLink} className="card-footer-item">Deployed</a></footer>
        </div>
    </div>
    );
}

export default Card;