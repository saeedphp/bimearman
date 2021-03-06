import styles from "./header-top.module.css";
import Link from "next/link";
import Image from "next/image";
import imgPath from "../../public/images/logo.png";
import HeaderSearch from "../icons/header-search";
import Phone from "../icons/phone";
import HeaderLogin from "../icons/header-login";
import HeaderArrow from "../icons/header-arrow";
import {useState} from "react";

const HeaderTop = () => {

    const [isShown, setIsShown] = useState(false);

    const toggle = () => {
        setIsShown(!isShown);
    };

        return (
        <div className={styles['header-row__top']}>
            <div className={`row ${styles.item} ${styles.logo}`}>
                <Link href="/">
                    <a>
                        <Image src={imgPath} alt="logo" layout={"fill"}/>
                    </a>
                </Link>
            </div>
            <div className={`row ${styles.item} ${styles.slogan}`}>
                <h2 className={styles.title}>
                    آرمان ما، آرمان شما
                </h2>
            </div>
            <div className={`row ${styles.item} ${styles.btnLogin}`}>
                <div className={styles.search}>
                    <a className={styles.tel} href="tel:0212856">
                        <Phone/>
                    </a>
                </div>
                <div className={styles.search}>
                    <HeaderSearch onClick={toggle}/>
                    <div className={`h-search ${styles.search__form} ${isShown ? 'active' : ''}`}>
                        <div className={styles.wrapper}>
                            <form role="search" method="get" className="search-form" action="https://milgerdiran.com/">
                                    <input type="text" placeholder="جستجو…" name="search" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.signIn}>
                    <Link href="/login">
                        <a>
                            <HeaderLogin/>
                        </a>
                    </Link>
                    <Link href="/login">
                        <a>
                                <span>
                                    پنل کاربری
                                </span>
                            </a>
                    </Link>
                    <HeaderArrow/>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;