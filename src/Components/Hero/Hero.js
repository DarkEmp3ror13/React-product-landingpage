import "../Hero/Hero.css";
import heroImg from "../../images/image-mockups.png";
import background from "../../images/bg-intro-desktop.svg";
import Button from "../Button/Button";

function Hero() {
    const btnName = "Request Invite";
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <h1>Next generation <br />digital banking</h1>
                    <p>Take your financial life online. Your Easybank account <br />will be a one-stop-shop
                        for spending, saving, <br />budgeting, investing, and much more.
                    </p>
                    <Button btnName={btnName} />
                </div>
                <div className="hero-right">
                    <img className="background" src={background} alt="#" />
                </div>
                <img className="hero-img" src={heroImg} alt="#" />
            </div>
        </>
    )
}

export default Hero;