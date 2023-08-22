import "./About.css";
import mainlogo from "../../../images/logo.svg";
import facebooklogo from "../../../images/icon-facebook.svg";
import youtubelogo from "../../../images/icon-youtube.svg";
import twitterlogo from "../../../images/icon-twitter.svg";
import pinterestlogo from "../../../images/icon-pinterest.svg";
import instagramlogo from "../../../images/icon-instagram.svg";
import Button from "../../Button/Button";

function Aboutus() {
    const btnValue = "Request Invite";

    return (
        <>
            <div className="Aboutus">
                <div className="logo-section">
                    <div className="main-logo">
                        <img src={mainlogo} alt="img" />
                    </div>
                    <div className="socials">
                        <img src={facebooklogo} alt="img" />
                        <img src={youtubelogo} alt="img" />
                        <img src={twitterlogo} alt="img" />
                        <img src={pinterestlogo} alt="img" />
                        <img src={instagramlogo} alt="img" />
                    </div>
                </div>
                <li>
                    <ul>About us</ul>
                    <ul>Contact</ul>
                    <ul>Blog</ul>
                </li>
                <li>
                    <ul>Careers</ul>
                    <ul>Support</ul>
                    <ul>Privacy Policy</ul>
                </li>
                <div className="copyright">
                    <Button btnName={btnValue} />
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Aboutus;