import styles from './banner.module.css';
import Image from "next/image";
import imgPath from '../../../public/images/banner.webp';
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: false,
        nav: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className={styles.banner}>

            <Slider {...settings}>
                <div className={styles['banner-wrapper']}>
                    <Image src={imgPath} alt="banner" layout={"fill"}/>
                </div>
                <div className={styles['banner-wrapper']}>
                    <Image src={imgPath} alt="banner" layout={"fill"}/>
                </div>
            </Slider>
        </section>
    );
};

export default Banner;