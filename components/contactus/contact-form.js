import styles from './contact-form.module.css';
import SocialTelegram from "../icons/social-telegram";
import SocialInsta from "../icons/social-insta";
import SocialLinkdin from "../icons/social-linkdin";
import Image from "next/image";
import imgPath from '../../public/images/contact-img.webp';
import Button from "../ui/button";
import {useEffect, useState} from "react";
import {ReCAPTCHA} from "react-google-recaptcha";

const ContactForm = () => {

    const initialValues = {name: "", mobile: "", subject: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setErrorForm] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setErrorForm(validateForm(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formError]);

    const validateForm = (values) => {
        const errors = {};
        const regex = /^[^\s@\+@[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = 'نام الزامی است!';
        }
        if (!values.mobile) {
            errors.mobile = 'شماره موبایل الزامی است!';
        }else if (values.mobile.length < 11) {
            errors.mobile = 'شماره همره نباید کمتر از 11 رقم باشد!';
        }else if (values.mobile.length > 11) {
            errors.mobile = 'شماره همره نباید بیشتر از 11 رقم باشد!';
        }
        if (!values.subject) {
            errors.subject = 'موضوغ الزامی است!';
        }
        return errors
    }

    return (
        <div className={styles['contact-form']}>
            <div className={styles.social}>
                <div>
                    <ul>
                        <li>
                            <a href="https://www.armanins.com/contact/instagram.com/armaninsurance">
                                <SocialTelegram/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.armanins.com/contact/instagram.com/armaninsurance">
                                <SocialLinkdin/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.armanins.com/contact/instagram.com/armaninsurance">
                                <SocialInsta/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src={imgPath} alt="image" layout={"fill"}/>
                </div>
            </div>
            <div className={styles.form}>
                <h2>
                    با ما در ارتباط باشید
                </h2>

                {/*<pre>{JSON.stringify(formValues, undefined, 2)}</pre>*/}
                <form id="myform" onSubmit={submitForm}>
                    {Object.keys(formError).length === 0 && isSubmit ? (
                        <div className={`${styles.controls} success`}><p>با موفقیت ارسال شد</p></div>
                    ) : ''}
                    <div className={styles.controls}>
                        <div className={styles.labelWrapper}>
                            <label htmlFor="name">
                                نام و نام خانوادگی*
                            </label>
                            <p className={styles.error}>
                                {formError.name}
                            </p>
                        </div>
                        <input className={formError.name ? 'error' : ''} id="name" name="name" type="text" value={formValues.name} onChange={handleChange}/>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.labelWrapper}>
                            <label htmlFor="mobile">
                                شماره موبایل*
                            </label>
                            <p className={styles.error}>
                                {formError.mobile}
                            </p>
                        </div>
                        <input className={formError.mobile ? 'error' : ''} id="mobile" name="mobile" type="tel" value={formValues.mobile} onChange={handleChange}/>
                    </div>
                    <div className={styles.controls}>
                       <div className={styles.labelWrapper}>
                           <label htmlFor="complain">
                               انتقاد و پیشنهاد شما*
                           </label>
                           <p className={styles.error}>
                               {formError.subject}
                           </p>
                       </div>
                        <textarea className={formError.subject ? 'error' : ''} name="subject" value={formValues.subject} onChange={handleChange}>

                        </textarea>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        data-theme="dark"
                        onChange={onChange}
                    />
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