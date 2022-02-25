import styles from "./footer-top.module.css";
import Image from "next/image";
import logo from "../../public/images/footer-logo.png";
import FooterLocation from "../icons/footer-location";
import FooterTel from "../icons/footer-tel";
import FooterMail from "../icons/footer-mail";
import Link from "next/link";
import enamad from "../../public/images/enamad.png";
import {getAllAccess} from "../../data/footer/quick-access";
import {getAllService} from "../../data/footer/services";
import {getAllRules} from "../../data/footer/rules";
import {Fragment} from "react";

const FooterTop = () => {

    const accessItems = getAllAccess();
    const serviceItems = getAllService();
    const ruleItems = getAllRules();

    return (
        <Fragment>
            <div className={styles['footer-top']}>
                <div className={`col-2 ${styles.item}`}>
                    <div className={styles.logo}>
                        <Image src={logo} alt="logo footer" layout={"fill"} />
                    </div>
                    <div className={styles['col-address']}>
                        <p>
                            <FooterLocation />
                            بلوار میرداماد، شمس تبریز جنوبی، پلاک 4
                        </p>
                        <a href="tel:0212856">
                            <FooterTel />
                            021-2856
                        </a>
                        <a href="mailto:info@armanins.com">
                            <FooterMail />
                            info@armanins.com
                        </a>
                    </div>
                </div>
                <div className={`col-2 ${styles.item}`}>
                    <h2 className={styles.title}>
                        دسترسی سریع
                    </h2>
                    <ul>
                        {accessItems.map((accessItem) => (
                            <li key={accessItem.id}>
                                <Link href={`/${accessItem.link}`}>
                                    <a>
                                        {accessItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`col-2 ${styles.item}`}>
                    <h2 className={styles.title}>
                        خدمات بیمه ای
                    </h2>
                    <ul>
                        {serviceItems.map((serviceItem) => (
                            <li key={serviceItem.id}>
                                <Link href={`/${serviceItem.link}`}>
                                    <a>
                                        {serviceItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`col-2 ${styles.item}`}>
                    <h2 className={styles.title}>
                        قوانین و مقررات
                    </h2>
                    <ul>
                        {ruleItems.map((ruleItem) => (
                            <li key={ruleItem.id}>
                                <Link href={`/${ruleItem.link}`}>
                                    <a>
                                        {ruleItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`col-2 ${styles.item}`}>
                    <div className={styles.enamad}>
                        <Image src={enamad} alt="enamad" layout={"fill"} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterTop;