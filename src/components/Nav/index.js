import React from "react";
// import "./style.css";


function Nav() {
    return(
        <nav className="navbar is-fixed-top">
                <div className="container">
                    <div className="navbar-brand">
                    <h1 class="navbar-item title has-text-white">Austin Wiley</h1>
                        {/* <a className="navbar-item" href="../">
                                <img src="../images/bulma.png" alt="Logo" />
                            </a> */}
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
                            {/* <a className="navbar-item">
                                    Team
                                </a>
                            <a className="navbar-item">
                                    Archives
                                </a>
                            <a className="navbar-item">
                                    Help
                                </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                        Account
                                    </a>
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                            Dashboard
                                        </a>
                                    <a className="navbar-item">
                                            Profile
                                        </a>
                                    <a className="navbar-item">
                                            Settings
                                        </a>
                                    <hr className="navbar-divider" />
                                    <div className="navbar-item">
                                        Logout
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Nav;