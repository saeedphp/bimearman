import styles from './footer.module.css';
import FooterTop from "./footer-top";
import FooterBottom from "./footer-bottom";

const Footer = () => {

    return (
        <section className={styles.footer}>
            <FooterTop />
            <FooterBottom />
        </section>
    );
};

export default Footer;