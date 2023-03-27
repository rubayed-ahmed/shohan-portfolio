import React, {} from "react";
import Header from "../Pages/Shared/Header/Header";
import Banner from "../Pages/Home/Banner/Banner";
import About from "../Pages/Home/About/About";
import Experience from "../Pages/Home/Experience/Experience";

const Main = () => {

  return (
    <div>
        <Header />
        <Banner />
        <About/>
        <Experience/>
    </div>
  );
};

export default Main;
