import styles from './banner.module.css';
import Image from "next/image";
import imgPath from '../../../public/images/banner.webp';

const Banner = () => {
    return (
      <section className={styles.banner}>
          <div className={styles['banner-wrapper']}>
              <Image src={imgPath} alt="banner" layout={"fill"} />
          </div>
      </section>
    );
};

export default Banner;