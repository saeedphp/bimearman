import PageHeader from "../../ui/page-header";
import styles from './terms.module.css';
import Card from "../../ui/card";
import Title from "../../ui/title";
import Image from "next/image";
import imgPath from '../../../public/images/terms.webp';
import DownloadCard from "../../ui/download-card";
import {getAllTerms} from "../../../data/terms";

const Terms = () => {

    const allTerms = getAllTerms();

    return (
        <>
            <PageHeader />
            <section className={styles.terms}>
                <Card>
                    <Title>
                        آیین نامه 90 شورایعالی بیمه
                    </Title>
                    <div className={styles.info}>
                        <div className={styles.imgWrapper}>
                            <Image src={imgPath} alt="terms image" layout={"fill"} />
                        </div>
                        <div className={styles.download}>
                            {allTerms.map((allTerm) => (
                                <div key={allTerm.id}>
                                    <a href={allTerm.link}>
                                        <DownloadCard>
                                            {allTerm.title}
                                        </DownloadCard>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </section>
        </>
    )
};

export default Terms;