import styles from './brochure.module.css';
import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import Card from "../../ui/card";
import Image from "next/image";
import imgPath from '../../../public/images/brochure/download-1.webp';
import Download from "../../icons/download";
import {allBrochure} from "../../../data/brochure";
import BrochureItem from "./brochure-item";

const Brochure = () => {

    const allBrochures = allBrochure();

    return (
        <Fragment>
            <PageHeader />
            <section className={styles.brochure}>
                <Card className={styles.wrapper}>
                    {allBrochures.map((allBrochure) => (
                        <BrochureItem
                            key={allBrochure.id}
                            title={allBrochure.title}
                            link={allBrochure.link}
                            backgroundImg={allBrochure.backgroundImg}
                        />
                    ))}
                </Card>
            </section>
        </Fragment>
    )
};

export default Brochure;