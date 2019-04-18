import React from "react";
import Icons from "../Icons"
// import "./style.css";


function Hero() {
    return(
    <section id="about" className="hero is-dark has-text-centered">
        <div className="hero-body">
            <div className="container">
            <img class="is-rounded" src="/images/profile2.jpg" />
                <p className="subtitle">
                Skilled engineer with experience in ​web development and deployment.​  Experienced in creative problem solving, collaboration, team management, training and organization, product/process development and supply relations.  A lifelong learner who taught myself how to start and run a successful business and now the endless possibilities of web development.   Thanks to years of working in cross-functional teams and running my own business, I’m great at coming up with solutions, no matter what you throw at me.
                </p>
            </div>
        </div>
        <p id="portfolio">- Skills -</p>
        <Icons />
    </section>
    );
}

export default Hero;