import {Fragment, useState} from "react";
import styles from "../products/insurance/insurance.module.css";
import Card from "../ui/card";
import Title from "../ui/title";

const ProductDetail = (props) => {

    const detail = props.detail;

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <Fragment>
            <section className={styles.insurance}>
                <div className={styles.main}>
                    <div className={styles.tab}>
                        <nav>
                            <ul className={`productItem`}>
                                {detail.map((data,i) => (
                                    <li key={i} className={toggle === i ? 'active' : null} onClick={() => {
                                        toggleTab(i)
                                    }}>
                                        <span>
                                            {data.icon}
                                        </span>
                                        <a href={`#${i}`}>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/*<Image src={imgPath} alt="image" layout={"fill"} />*/}
                    </div>
                    <div className={`${styles.info}`}>
                        <Card>
                            <ul>
                                {detail.map((data,i) => (
                                    <Fragment key={i}>
                                        {toggle === i ? (
                                            <li id={i}>
                                                {data.title !== '' ?
                                                    <Title className={styles.title}>
                                                        {data.title}
                                                    </Title> :
                                                    null
                                                }
                                                {data.description !== '' ?
                                                    <div>
                                                        {data.description}
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
    )


};

export default ProductDetail;