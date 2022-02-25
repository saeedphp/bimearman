import {Fragment} from "react";
import Banner from "../components/home-page/banner/banner";
import Intro from "../components/home-page/intro/intro";
import Insurance from "../components/home-page/insurance/insurance";
import AllInsurance from "../components/home-page/all-insurance/all-insurance";
import Blog from "../components/home-page/blog/blog";

const HomePage = () => {
    return (
        <Fragment>
            <Banner/>
            <Intro/>
            <Insurance/>
            <AllInsurance/>
            <Blog/>
        </Fragment>
    );
};

export default HomePage;