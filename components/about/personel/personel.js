import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from './personel.module.css';
import PersonelItem from "./personel-item";
import {NextSeo} from "next-seo";
import bgHeader from "../../../public/images/page-header.webp";

const Personel = () => {

    return (
      <Fragment>
          <NextSeo title="پرسنل و اعضای بیمه آرمان">

          </NextSeo>
          <PageHeader title="پرسنل و اعضای بیمه آرمان" bg={bgHeader} />
          <section className={styles.personel}>
              <ul>
                  <PersonelItem />
              </ul>
          </section>
      </Fragment>
    );
};

export default Personel;