import React from "react";
import Icons from "../Icons"

function Hero() {
    return(
    <section id="about" className="hero is-dark has-text-centered">
        <div className="hero-body">
            <div className="container">
            <img className="is-rounded" src="/images/profile2.jpg" alt="profile"/>
                <p className="subtitle">
                Im a fullstack software and web developer based out of Denver Colorado.  I build web applications mainly with ReactJS and Node.js
                </p>
            </div>
        </div>
        <p id="portfolio">- Skills -</p>
        <Icons />
    </section>
    );
}

export default Hero;