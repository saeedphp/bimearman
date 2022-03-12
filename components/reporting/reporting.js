import { useMemo, useState } from "react";
import {Fragment} from "react";
import PageHeader from "../ui/page-header";
import styles from './reporting.module.css';
import Title from "../ui/title";
import DownArrow from "../icons/down-arrow";
import Card from "../ui/card";

const DUMMY_DATA = [
    {
        id: 'r1',
        title: 'گزارشگری و افشای اطلاعات',
        children: [
            {
                id: 'r1-1',
                txt: 'مشخصات ثبتی شرکت',
            },
            {
                id: 'r1-2',
                txt: 'اساسنامه شرکت',
            },
            {
                id: 'r1-3',
                txt: 'مشخصات و اطلاعات مدیران شرکت',
            },
            {
                id: 'r1-4',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
            {
                id: 'r1-5',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
            {
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
            {
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },{
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },{
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },{
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
        ],
    },
    {
        id: 'r2',
        title: 'گزارشگری و افشای ',
        children: [
            {
                id: 'r1-1',
                txt: 'مشخصات ثبتی شرکت',
            },
            {
                id: 'r1-2',
                txt: 'اساسنامه شرکت',
            },
            {
                id: 'r1-3',
                txt: 'مشخصات و اطلاعات مدیران شرکت',
            },
            {
                id: 'r1-4',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
            {
                id: 'r1-5',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
            {
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
            {
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },{
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },{
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },{
                id: 'r1-6',
                txt: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
        ],
    },
];

const Reporting = () => {

    const [items] = useState(DUMMY_DATA);
    const [numberOfItemsShown, setNumberOfItemsToShown] = useState(4);

    const showMore = () => {
        if (numberOfItemsShown + 3 <= items.length) {
            setNumberOfItemsToShown(numberOfItemsShown + 3);
        } else {
            setNumberOfItemsToShown(numberOfItemsShown + 3);
        }
    };

    const itemsToShow = useMemo(() => {
        return items
            .map((report) => (
                <li key={report.id}>
                    <div className={styles.info}>
                        <Title className={styles.title}>
                            <i></i>
                            {report.title}
                            <DownArrow />
                        </Title>
                        <ul>
                            {report.children.slice(0, numberOfItemsShown).map((values) => (
                                <li key={values.id} className={styles.items}>
                                    <div className={styles.tab}>
                                  <span>
                                      <i></i>
                                  </span>
                                        <Card className={styles.txt}>
                                            {values.txt}
                                        </Card>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={showMore}>
                        click
                    </button>
                </li>
                ));
    }, [items, numberOfItemsShown]);

    return (
      <Fragment>
          <PageHeader />
          <section className={styles.reporting}>
              <div className={styles.card}>
                  <ul>
                      {itemsToShow.length ? itemsToShow : "Loading..."}
                  </ul>
                  <div className={styles.img}>
                      2
                  </div>
              </div>
          </section>
      </Fragment>
    );
};

export default Reporting;