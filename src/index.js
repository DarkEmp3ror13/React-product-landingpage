import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Secondpage from "./Components/Secondpage/Secondpage";
import Article from "./Components/Thirdpage/Articles/Articles";
import Aboutus from "./Components/Thirdpage/Aboutus/About";

function App(){
    return(
        <>
          <Navbar />
          <Hero />
          <Secondpage />
          <Article />
          <Aboutus />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);