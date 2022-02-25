import styles from "./footer-bottom.module.css";
import SocialLinkdin from "../icons/social-linkdin";
import SocialTelegram from "../icons/social-telegram";
import SocialInsta from "../icons/social-insta";

const FooterBottom = () => {
    return (
        <div className={styles['footer-bottom']}>
            <ul>
                <li>
                    <a href="#">
                        <SocialLinkdin />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SocialTelegram />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SocialInsta />
                    </a>
                </li>
            </ul>
            <div className={styles.copyRight}>
                <p>
                    کلیه حقوق متعلق به بیمه آرمان می باشد
                </p>
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