import React, {} from "react";
import Header from "../Pages/Shared/Header/Header";
import Banner from "../Pages/Home/Banner/Banner";
import About from "../Pages/Home/About/About";
import Experience from "../Pages/Home/Experience/Experience";
import Works from "../Pages/Home/Works/Works";

const Main = () => {

  return (
    <div>
        <Header />
        <Banner />
        <About/>
        <Experience/>
        <Works/>
    </div>
  );
};

export default Main;
