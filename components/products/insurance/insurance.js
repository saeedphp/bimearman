import {Fragment, useState} from "react";
import PageHeader from "../../ui/page-header";
import styles from './insurance.module.css';
import Image from "next/image";
import imgPath from '../../../public/images/product-img.webp';
import Card from "../../ui/card";
import Title from "../../ui/title";
import {getALlProduct} from "../../../data/product";


const Insurance = () => {

    const productData = getALlProduct();

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <PageHeader/>
            <section className={styles.insurance}>
                <div className={styles.main}>
                    <div className={styles.tab}>
                        <nav>
                            <ul className={`productItem`}>
                                {productData.map((data) => (
                                    <li key={data.id} className={toggle === data.id ? 'active' : null} onClick={() => {
                                        toggleTab(data.id)
                                    }}>
                                        <span>
                                            {data.icon}
                                        </span>
                                        {data.tabTitle}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Image src={imgPath} alt="image" layout={"fill"} />
                    </div>
                    <div className={`${styles.info}`}>
                        <Card>
                            <ul>
                                {productData.map((data) => (
                                    <Fragment key={data.id}>
                                        {toggle === data.id ? (
                                            <li>
                                                {data.contentTitle !== '' ?
                                                    <Title>
                                                        {data.contentTitle}
                                                    </Title> :
                                                null
                                                }
                                                {data.contentDesc !== '' ?
                                                    <div>
                                                        {data.contentDesc}
                                                    </div> :
                                                null
                                                }
                                            </li>
                                        ):null}
                                    </Fragment>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Insurance;