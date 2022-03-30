import {Fragment} from "react";
import styles from './branch.module.css';
import Link from "next/link";
import DownloadBranch from "../../icons/download-branch";
import {allHealthCenters} from "../../../data/health-center";
import HealthList from "./health-list";
import HealthFilter from "./health-filter";

const Branch = () => {



    return (
        <Fragment>
            <section className={styles.branch}>
                <HealthFilter />

            </section>
        </Fragment>
    )
};

export default Branch;