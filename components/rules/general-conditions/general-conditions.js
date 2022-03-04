import {Fragment, useState} from "react";
import styles from './general-conditions.module.css';
import PageHeader from "../../ui/page-header";
import Card from "../../ui/card";
import Title from "../../ui/title";
import FaqItem from "../../icons/faq-item";
import {getAllConditions} from "../../../data/conditions";
import DownArrow from "../../icons/down-arrow";
import GeneralConditionsItems from "./general-conditions-items";

const GeneralConditions = () => {

    const allConditions = getAllConditions();



    return (
        <Fragment>
            <PageHeader/>
            <Card className={styles.conditions}>
                <Title>
                    آیین نامه شماره ۷۷
                </Title>
                <p className={styles.desc}>
                    شورای‌عالی بیمه در اجرای ماده ۱۷ قانون تأسیس بیمه مرکزی ایران و بیمه‌گری و دستور‌العمل موضوع ماده ۱۳ آیین‌نامه اجرایی ماده ۹۱ قانون برنامه چهارم توسعه اقتصادی، اجتماعی و فرهنگی جمهوری اسلامی ایران، در جلسه مورخ 1391/08/30 «شرایط عمومی بیمه‌نامه مسافرتی اتباع خارجی متقاضی ورود به جمهوری اسلام  ایران» را مشتمل بر ۷ ماده به شرح ذیل تصویب نمود:
                </p>

                <div className={styles.wrapper}>
                    {allConditions.map((item) => (
                        <GeneralConditionsItems
                            key={item.id}
                            id={item.id}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>

            </Card>
        </Fragment>
    )
};

export default GeneralConditions;