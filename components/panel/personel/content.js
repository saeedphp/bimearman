import {Fragment, useState} from "react";
import styles from './content.module.css';
import PanelDownload from "../../ui/panel-download";
import News from "../../icons/panel/personel/news";
import Image from "next/image";
import mockup from "../../../public/images/panel/panel-mockup.png";
import {getAllPersonelData} from "../../../data/personel-panel";
import Card from "../../ui/card";
import Links from "./links";
import search from '../../../public/images/search.png';

const Content = () => {

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    const personelData = getAllPersonelData();

    const [inputText, setInputText] = useState("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };



    return (
        <Fragment>

            <div className={styles.sidebar}>
                <div className={styles.panel}>
                    <nav>
                        <ul>
                            {personelData.map((item, i) => (
                                <li key={i} className={`personel_item ${toggle === i ? 'active' : null}`} onClick={() => {
                                    toggleTab(i)
                                }}>
                                    <a href={`#${item.title}`}>
                                <span>
                                    <News/>
                                </span>
                                        {item.title}
                                    </a>
                                </li>
                                ))}
                        </ul>

                    </nav>
                </div>
                <span className={styles.img}>
                        <Image src={mockup} alt="mockup image" layout={"fill"}/>
                    </span>
            </div>

            <div className={styles.main}>

                <Card className={styles.search}>
                    <span>
                        <Image src={search} alt="search" layout={"fill"} />
                    </span>
                    <input type="text" placeholder="?????????? ???? ???????? ?????????? ???????? ??????" value={inputText} onChange={onChange} />
                </Card>

                <div className={styles.box}>

                    <div className={styles.header}>
                        <h4>
                            ??????????
                        </h4>
                        <h4>
                            ?????????? ??????????
                        </h4>
                        <h4>
                            ??????
                        </h4>
                    </div>

                    <div className={styles.body}>
                        {personelData.map((data,i) => (
                            <div id={data.title} className={`personel_container ${toggle === i ? 'active' : null}`} key={i}>
                                {data.fields.filter((item) => {
                                    return (
                                        item.title.includes(inputText)
                                    )
                                })
                                    .map((item, i) => (
                                    <div key={i} className={`${styles.item}`}>
                                        <p>
                                            {item.title}
                                        </p>
                                        <time>
                                            {new Date(item.date).toLocaleDateString('fa-IR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </time>
                                        <PanelDownload href={item.file}>
                                            ???????????? ??????
                                        </PanelDownload>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

                <Links />

            </div>

        </Fragment>
    )
};

export default Content;