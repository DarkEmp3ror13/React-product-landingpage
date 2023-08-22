import "./Card.css";

function Card (props) {
    const {logo, heading, description} = props;
    
    return (
        <div className="CardCopmonent">
            <img src={logo} alt="img" />
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card;