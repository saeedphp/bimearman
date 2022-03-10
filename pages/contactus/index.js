import Contactus from "../../components/contactus/contactus";
import {Fragment} from "react";
import {NextSeo} from "next-seo";

const ContactusPage = () => {
    return (
        <Fragment>
            <NextSeo title="تماس با ما">

            </NextSeo>
            <Contactus />
        </Fragment>
    );
};

export default ContactusPage;