import logo from "../../images/logo.svg";
import "../Navbar/Navbar.css";
import Button from "../Button/Button";

function Navbar() {
    const btnValue = "Request-call";
    return (
        <>
            <div className="navbar">
                <div className="img-div"> 
                <img src={logo} alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
                <div className="btn-div">
                <Button btnName={btnValue}/>
                </div>
            </div>
        </>
    )
}

export default Navbar;