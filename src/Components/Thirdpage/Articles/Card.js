import "./Card.css";

function Cardarticle(props) {
    const { logo, owner, heading, description } = props;

    return (
        <div className="CardArticle">
            <img src={logo} alt="img" />
            <div className="details">
                <h4>{owner}</h4>
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Cardarticle;