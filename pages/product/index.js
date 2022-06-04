import {Fragment} from "react";
import AllInsurances from "../../components/home-page/all-insurances/all-insurances";
import {NextSeo} from "next-seo";
import imgPath from "../../public/images/page-header.webp";
import PageHeader from "../../components/ui/page-header";

const ProductPage = () => {
    return (
        <Fragment>
            <NextSeo title="محصولات">

            </NextSeo>
            <PageHeader title="محصولات" pageTitle="" pageLink="#" bg={imgPath}/>
            <AllInsurances />
        </Fragment>
    )
};

export default ProductPage;