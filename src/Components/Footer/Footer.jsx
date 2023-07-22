import React from "react";
import './footer.scss';
import logo from '../Header/logo.png';

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <a href="/"><img src={logo} alt="" className="logo"/></a>
                        <p className="footer__info">guntherblacksmithinfo@gmail.com</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;