import styles from './contact-form.module.css';
import SocialTelegram from "../icons/social-telegram";
import SocialInsta from "../icons/social-insta";
import SocialLinkdin from "../icons/social-linkdin";
import Image from "next/image";
import imgPath from '../../public/images/contact-img.webp';
import Button from "../ui/button";

const ContactForm = () => {

    return (
        <div className={styles['contact-form']}>
            <div className={styles.social}>
                <div>
                    <ul>
                        <li>
                            <a href="#">
                                <SocialTelegram />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <SocialLinkdin />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <SocialInsta />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src={imgPath} alt="image" layout={"fill"} />
                </div>
            </div>
            <div className={styles.form}>
                <h2>
                    با ما در ارتباط باشید
                </h2>
                <form>
                    <div className={styles.controls}>
                        <label htmlFor="name">
                            نام و نام خانوادگی*
                        </label>
                        <input id="name" type="text" />
                    </div>
                    <div className={styles.controls}>
                        <label htmlFor="mobile">
                            شماره موبایل*
                        </label>
                        <input id="mobile" type="tel" />
                    </div>
                    <div className={styles.controls}>
                        <label htmlFor="complain">
                            انتقاد و پیشنهاد شما*
                        </label>
                        <textarea name="complain">

                        </textarea>
                    </div>
                    <div className={styles.controls}>
                       <Button>
                           ارسال پیام
                       </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;