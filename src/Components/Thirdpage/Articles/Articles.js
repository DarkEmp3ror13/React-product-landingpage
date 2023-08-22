import Data from "./Articlecards";
import Cardarticle from "./Card";
import "./Article.css";

function Article() {
    console.log(Data);
    return <>
        <div className="Articles">
            <h1>Latest Articles</h1>
            <div className="Cards">
                {Data.map((ele) => {
                    return <Cardarticle logo={ele.logo} owner={ele.owner} heading={ele.heading} description={ele.description} />
                })}
            </div>
        </div>
    </>
}

export default Article;