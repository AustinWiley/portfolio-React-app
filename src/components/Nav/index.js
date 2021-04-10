import React from "react";

function Nav() {
    return(
        <nav className="navbar is-fixed-top">
                <div className="container">
                    <div className="navbar-brand">
                    <h1 className="navbar-item title has-text-white">Austin Wiley</h1>
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item" href="#about">
                                    About
                                </a>
                            <a className="navbar-item" href="#portfolio">
                                   Portfolio
                                </a>
                            <a className="navbar-item" href="#footer">
                                    Contact
                                </a>
                                <a className="navbar-item" href="images/Austin Wiley Resume.pdf">
                                    Resume
                                </a>
                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Nav;