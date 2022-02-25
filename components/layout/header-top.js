import styles from "./header-top.module.css";
import Link from "next/link";
import Image from "next/image";
import imgPath from "../../public/images/logo.png";
import HeaderSearch from "../icons/header-search";
import HeaderLogin from "../icons/header-login";
import HeaderArrow from "../icons/header-arrow";

const HeaderTop = () => {
    return (
        <div className={styles['header-row__top']}>
            <div className={`row ${styles.item} ${styles.logo}`}>
                <Link href="/">
                    <a>
                        <Image src={imgPath} alt="logo" layout={"fill"} />
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
                    <HeaderSearch />
                </div>
                <div className={styles.signIn}>
                    <HeaderLogin />
                    <span>
                                پنل کاربری
                            </span>
                    <HeaderArrow />
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;