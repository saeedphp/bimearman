import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from './intro.module.css';
import Image from "next/image";
import imgPath from '../../../public/images/about/intro/intro.webp';
import {aboutData} from "../../../data/about/intro";

const Intro = () => {

    const about = aboutData();

    return (
      <Fragment>
          <PageHeader />
          <section className={styles.intro}>
              <div className={styles.init}>
                  <div className={styles.imgWrapper}>
                      <Image src={imgPath} alt="image" layout={"fill"} />
                  </div>
                  <div className={styles.info}>
                      <h2 className={styles.title}>
                          تاسیس بیمه آرمان
                      </h2>
                      <p className={styles.desc}>
                          شرکت بیمه آرمان  ( سهامی عام )  به موجب قانون تاسیس بیمه گری  و با مجوز  شماره ۴۱۹۸۰۱ بیمــه مرکزی جمهوری اسلامی ایـران در تاریخ   ۱۳۹۰/۱۰/۰۷  در اداره ثبت شرکتها و مؤسسات غیر تجاری، به ثبت رسید و  پروانه فعالیت بیمه گری  در انواع  رشته های بیمه ای را تحت شماره ۴۳۵۴۱/۹۰ مورخ  ۱۳۹۰/۱۱/۱۸  بیمه مرکزی  جمهوری اسلامی  ایران دریافت کرد.
                      </p>
                      <p className={styles.desc}>
                          سرمایه اولیه شرکت در زمان تأسیس ۶۰۰ میلیارد ریال بود که با مشارکت شرکت ها و بنگاههای مالی، اقتصادی و خدماتی در اداره  ثبت شرکت  در تهران به ثبت رسید. هیأت مدیرهشرکت  به منظور  حضور قدرتمند در بازار بیمه و سرمایه کشور، افزایش سرمایه شرکت را تا مبلغ ۲۶۴۰میلیارد ریال در تاریخ ۱۳۹۱/۰۳/۰۹ تصویب کرد و به دنبال آن مجمع عمومی فوق العاده در تاریخ ۱۳۹۲/۰۴/۰۲ تشکیل شد و خذ مجوز افزایش سرمایه از بیمه مرکزی ج.ا.ا وسازمان  بورس اوراق بهادار، سهامداران با افزایش سرمایه شرکت موافقت کردند
                      </p>
                  </div>
              </div>
          </section>
      </Fragment>
    );
};

export default Intro;