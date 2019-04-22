import React from "react";
// import "./style.css";


function Footer() {
    return(
        <footer id="footer" className="footer clearfix">
        <div className="container">
            <div className="content has-text-centered">
            <p className="contact"><strong>Contact me</strong></p>
            <p><strong>wileybeer@gmail.com</strong></p>
            <p>5974 S. Fairfield St</p>
            <p>Littleton Co, 80120</p>
            <p>303 905 7293</p>
                <div className="soc">
                    <a href="https://github.com/AustinWiley"><i className="fa fa-github-alt fa-2x" aria-hidden="true"></i></a>
                    {/* <a href="#"><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></a> */}
                    <a href="https://www.facebook.com/profile.php?id=100010508911645"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                    {/* <a href="#"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a> */}
                    <a href="https://www.linkedin.com/in/austin-wiley-86868416b/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                </div>
                <p>
                    <i className="fa fa-file"></i><a href="images/Austin Wiley Resume.pdf">Austin Wiley Resume</a>.
                </p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;