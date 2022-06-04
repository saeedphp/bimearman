import styles from "./footer-bottom.module.css";
import SocialLinkdin from "../icons/social-linkdin";
import SocialTelegram from "../icons/social-telegram";
import SocialInsta from "../icons/social-insta";

const FooterBottom = () => {
    return (
        <div className={styles['footer-bottom']}>
            <ul>
                <li>
                    <a href="https://www.armanins.com/contact/instagram.com/armaninsurance">
                        <SocialLinkdin />
                    </a>
                </li>
                <li>
                    <a href="https://www.armanins.com/contact/instagram.com/armaninsurance">
                        <SocialTelegram />
                    </a>
                </li>
                <li>
                    <a href="https://www.armanins.com/contact/instagram.com/armaninsurance">
                        <SocialInsta />
                    </a>
                </li>
            </ul>
            <div className={styles.copyRight}>
                <p>
                    کلیه حقوق متعلق به بیمه آرمان می باشد
                </p>
            </div>
            <div className={styles.copyRight}>
                <p>
                    طراحی و اجرا توسط
                    <a href="https://faramouj.ir">
                        فراموج
                    </a>
                </p>
            </div>
        </div>
    )
};

export default FooterBottom;