import "./Secondpage.css";
import Cards from "../Cardsdata/Card";
import cardData from "../Cardsdata/Cardsdata";


function Secondpage() {
    // const titel = "My Card";
    // const description = "This is Card description"
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600&display=swap');
            </style>
            <div className="Secondpage">
            <div className="Headline">
                <h1>Why choose Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into financial hub. <br />Control your finances like never before.</p>
            </div>
            <div className="Cards">
                {cardData.map((ele) => {
                    return <Cards logo={ele.logo} heading={ele.heading} description={ele.description} />
                })}
            </div>
            </div>
        </>
    )
}

export default Secondpage;