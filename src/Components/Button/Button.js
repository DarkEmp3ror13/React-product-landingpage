import "./Button.css";

function Button (props) {
    console.log(props);
    const {btnName}=props;

    return (
        <>
        <btn className="btn-primary">{btnName}</btn>
        </>
    )
}

export default Button;
