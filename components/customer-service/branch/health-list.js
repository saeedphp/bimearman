import React, {Fragment} from "react";
import styles from "./health-list.module.css";
import Link from "next/link";
import DownloadBranch from "../../icons/download-branch";
import {allHealthCenters} from "../../../data/health-center";
import Title from "../../ui/title";
import HealthItem from "./health-item";

const HealthList = (props) => {

    const healthCenterItems = allHealthCenters();

    if (props.items.length === 0) {
        return (
            <Title>
                شعبه ای پیدا نشد!
            </Title>
        )
    }

    return (
        <Fragment>
            <ul>
                {props.items.map((item) => (
                    <HealthItem
                        key={item.id}
                        id={item.id}
                        link={item.link}
                        cityTitle={item.cityTitle}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default HealthList;