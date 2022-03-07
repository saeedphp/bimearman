import {Fragment} from "react";
import PageHeader from "../../ui/page-header";
import styles from './personel.module.css';
import PersonelItem from "./personel-item";

const Personel = () => {

    return (
      <Fragment>
          <PageHeader />
          <section className={styles.personel}>
              <ul>
                  <PersonelItem />
              </ul>
          </section>
      </Fragment>
    );
};

export default Personel;