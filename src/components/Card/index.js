import React from "react";
// import "./style.css";


function Card(props) {
    return(
        <div className="column is-one-quarter">
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={props.image} alt="Image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    {/* <div className="media-left">
                        <figure className="image is-96x96">
                            <img src={props.image} alt="Image" />
                        </figure>
                    </div> */}
                    <div className="media-content">
                        <p className="title is-4 no-padding">{props.title}</p>
                        {/* <p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p> */}
                        {/* <p className="subtitle is-6">Lead Developer</p> */}
                    </div>
                </div>
                <div className="description">
                        {props.description}
                    <div className="background-icon"><span className="icon-twitter"></span></div>
                </div>
            </div>
        <footer className="card-footer"><a target="_blank" rel="noopener noreferrer" href={props.githubLink} className="card-footer-item">Github</a> <a target="_blank" rel="noopener noreferrer" href={props.deployedLink} className="card-footer-item">Deployed</a></footer>

        </div>
    </div>
    );
}

export default Card;