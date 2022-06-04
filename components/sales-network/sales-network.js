import {Fragment, useState} from "react";
import styles from './sales-network.module.css';
import PageHeader from "../ui/page-header";
import Card from "../ui/card";
import TitleContent from "../ui/title-content";
import {NextSeo} from "next-seo";
import imgPath from '../../public/images/page-header.webp';

const SalesNetWork = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <NextSeo title="قوانین و مقررات">

            </NextSeo>
            <PageHeader title="قوانین و مقررات" pageTitle="شبکه فروش" pageLink="" bg={imgPath}/>
            <Card className={styles.rules}>
                <nav className="rules-tab">
                    <ul>
                        <li className={toggle === 1 ? 'active' : null} onClick={() => {
                            toggleTab(1)
                        }}>
                            قوانین عمومی
                        </li>
                        <li className={toggle === 2 ? 'active' : null} onClick={() => {
                            toggleTab(2)
                        }}>
                            قوانین اختصاصی
                        </li>
                    </ul>
                </nav>
                <div className={styles.content}>
                    {toggle === 1 ? (
                            <div>
                                <p>
                                    شرکت بیمه آرمان با اخذ مجوز فعالیت از بیمه مرکزی جمهوری اسلامی ایران(شماره ثبت ۴۱۹۸۰۱)؛
                                    به منظور توسعۀ شبکه فروش و گسترش خدمات بیمه ای خود در سراسر کشور اقدام به جذب نماینده می
                                    نماید. متقاضیان اخذ پروانه نمایندگی حقیقی در صورت دارا بودن شرایط زیر، می توانند نسبت به
                                    تکمیل و ارسال فرم درخواست اقدام و یا به شعب بیمه آرمان مراجعه نمایند.
                                </p>
                                <TitleContent>
                                    شرایط اخذ نمایندگی حقیقی :
                                </TitleContent>
                                <ol>
                                    <li>
                                        تابعیت دولت جمهوری اسلامی ایران و اعتقاد به اسلام یا یکی از ادیان رسمی کشور
                                    </li>
                                    <li>
                                        عدم اعتیاد به مواد مخدر و الکل
                                    </li>
                                    <li>
                                        نداشتن سوء پیشینه کیفری و نداشتن سابقه محکومیت به جرایم موضوع ماده ۶۴ قانون تأسیس
                                        بیمه مرکزی جمهوری اسلامی ایران و بیمه گری
                                    </li>
                                    <li>
                                        حداقل سن ۲۰ سال تمام
                                    </li>
                                    <li>
                                        دارا بودن مدرک تحصیلی لیسانس در رشته بیمه و یا سایر رشته ها با گرایش بیمه بدون نیاز
                                        به داشتن سابقه کار بیمه ای یا حداقل مدرک کارشناسی در رشته های مرتبط (اقتصاد،امور
                                        مالی،حسابداری،آمار،مدیریت و حقوق) با یک سال سابقه کار بیمه ای فنی و تخصصی ،یا حداقل
                                        مدرک کارشناسی در سایر رشته ها با دو سال سابقه کار بیمه ای فنی و تخصصی،یا حداقل مدرک
                                        تحصیلی دیپلم با سه سال سابقه کار بیمه ای فنی و تخصصی ( متقاضیانی که به جز سابقه کار
                                        مفید بیمه ای ، از سایر شرایط برخوردار باشند، در صورت گذراندن دوره های مورد نظر ۱۲۰
                                        تا ۱۶۰ ساعته ( بر اساس مدرک تحصیلی دیپلم، فوق دیپلم، لیسانس و غیره) و موفقیت در
                                        آزمون نمایندگی بیمه مرکزی جمهوری اسلامی ایران نمایندگی به آنها داده خواهد شد.)
                                    </li>
                                    <li>
                                        داشتن دفتر کار اختصاصی (مالکیت و یا اجاره)
                                    </li>
                                </ol>
                            </div>
                        ) :
                        null}
                    {toggle === 2 ? (
                            <div>
                                <p>
                                    شرکت بیمه آرمان با اخذ مجوز فعالیت از بیمه مرکزی جمهوری اسلامی ایران(شماره ثبت ۴۱۹۸۰۱)؛
                                    به منظور توسعۀ شبکه فروش و گسترش خدمات بیمه ای خود در سراسر کشور اقدام به جذب نماینده می
                                    نماید. متقاضیان اخذ پروانه نمایندگی حقیقی در صورت دارا بودن شرایط زیر، می توانند نسبت به
                                    تکمیل و ارسال فرم درخواست اقدام و یا به شعب بیمه آرمان مراجعه نمایند.
                                </p>
                                <TitleContent>
                                    شرایط اخذ نمایندگی حقیقی :
                                </TitleContent>
                                <ol>

                                    <li>
                                        عدم اعتیاد به مواد مخدر و الکل
                                    </li>

                                    <li>
                                        حداقل سن ۲۰ سال تمام
                                    </li>
                                    <li>
                                        دارا بودن مدرک تحصیلی لیسانس در رشته بیمه و یا سایر رشته ها با گرایش بیمه بدون نیاز
                                        به داشتن سابقه کار بیمه ای یا حداقل مدرک کارشناسی در رشته های مرتبط (اقتصاد،امور
                                        مالی،حسابداری،آمار،مدیریت و حقوق) با یک سال سابقه کار بیمه ای فنی و تخصصی ،یا حداقل
                                        مدرک کارشناسی در سایر رشته ها با دو سال سابقه کار بیمه ای فنی و تخصصی،یا حداقل مدرک
                                        تحصیلی دیپلم با سه سال سابقه کار بیمه ای فنی و تخصصی ( متقاضیانی که به جز سابقه کار
                                        مفید بیمه ای ، از سایر شرایط برخوردار باشند، در صورت گذراندن دوره های مورد نظر ۱۲۰
                                        تا ۱۶۰ ساعته ( بر اساس مدرک تحصیلی دیپلم، فوق دیپلم، لیسانس و غیره) و موفقیت در
                                        آزمون نمایندگی بیمه مرکزی جمهوری اسلامی ایران نمایندگی به آنها داده خواهد شد.)
                                    </li>
                                    <li>
                                        داشتن دفتر کار اختصاصی (مالکیت و یا اجاره)
                                    </li>
                                </ol>
                            </div>
                        ) :
                        null}
                </div>
            </Card>
        </Fragment>
    );
};

export default SalesNetWork;