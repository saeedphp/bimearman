import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from './vision.module.css';
import imgPath from '../../../public/images/vision-bg.webp';
import Image from "next/image";
import {getAllVision} from "../../../data/vision";
import VisionItem from "./vision-item";

const Vision = () => {

    const items = getAllVision();

    return (
        <Fragment>
            <PageHeader />
            <section className={styles.vision}>
                <div>
                    <Image src={imgPath} alt="vision image" layout={"fill"} />
                </div>
                <div className={styles.info}>
                    <p>
                        فعالیت در یک صنعت خدماتی مبتنی بر رقابت آزاد مستلزم تدوین و تالیف نقشه راه وترسیم  افق فعالیت های سازمان است. افزایش  چشمگیر تعداد شرکت های بیمۀ فعال در سطح کشور و نیز حضور شرکت های با سابقه و توانمنددر این صنعت، شان از اهمیت و  لزوم برنامه ریزی،سازماندهی، مدیریت و اتخاذ تدابیر مناسب  برای شرکت های نو پاست.
                    </p>
                    <p>
                        گروه موسسان و سهامداران شرکت بیمۀ آرمان ضمن بررسی و تحقیق گسترده و با فراخوان مدیران و کارشناسان باسابقه، اهداف و چشم انداز فعالیت شرکت را مطابق با اصول زیر ترسیم کرده اند:
                    </p>
                </div>

                <ul>
                    {items.map((item) => (
                        <VisionItem
                            key={item.id}
                            title={item.title}
                        />
                    ))}
                </ul>

            </section>
        </Fragment>
    )
};

export default Vision;