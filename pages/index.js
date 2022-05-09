import {Fragment} from "react";
import Banner from "../components/home-page/banner/banner";
import Intro from "../components/home-page/intro/intro";
import Insurance from "../components/home-page/insurance/insurance";
import AllInsurance from "../components/home-page/all-insurance/all-insurance";
import Blog from "../components/home-page/blog/blog";
import Head from "next/head";
import FloatingMenu from "../components/home-page/floating-menu/floating-menu";
import AllInsurances from "../components/home-page/all-insurances/all-insurances";

const HomePage = () => {
    return (
        <Fragment>
            <Head>
                <title>بیمه آرمان-آرمان ما، آرمان شما</title>
                <meta name="description" content="Arman INs Site" />
                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <Banner/>
            <Intro/>
            <Insurance/>
            <AllInsurances />
            <Blog/>
            <FloatingMenu />
        </Fragment>
    );
};

export default HomePage;