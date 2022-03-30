import {Fragment} from "react";
import styles from "./health-list.module.css";
import Link from "next/link";
import DownloadBranch from "../../icons/download-branch";

const HealthItem = (props) => {

    const {id, link, cityTitle, centerItem, city, centerName, address, tel, state, center} = props;

    return (
        <Fragment>
            <li>
                <div key={id}>
                    <div className={styles['row-top']}>
                        <div className={styles['download-row']}>
                            <Link href={link}>
                                <a>
                                    <DownloadBranch/>
                                    <span>
                            دانلود فایل مراکز درمانی بیمه آرمان در استان {cityTitle}
                        </span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles['row-head']}>
                            <span style={{width: '50px'}}></span>
                            <span>
                            نام مرکز
                        </span>
                            <span>
                            آدرس
                        </span>
                            <span>
                            تلفن
                        </span>
                            <span>
                            شهر
                        </span>
                            <span>
                            استان
                        </span>
                            <span>
                            مرکز
                        </span>
                        </div>
                        {centerItem.map((res, index) => (
                            <div key={index} className={styles['row-content']}>
                        <span className={styles.number}>
                            {index + 1}
                        </span>
                    am            <div>
                            <span>
                                {res.centerName}
                            </span>
                                    <span>
                                {res.address}
                            </span>
                                    <span>
                                <a href={`tel:${res.tel}`}>
                                    {res.tel}
                                </a>
                            </span>
                                    <span>
                                {res.city}
                            </span>
                                    <span>
                                {res.state}
                            </span>
                                    <span>
                                {res.center}
                            </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </li>
        </Fragment>
    );
};

export default HealthItem;