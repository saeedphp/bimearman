import {Fragment, useMemo, useState} from "react";
import styles from "./reporting.module.css";
import Title from "../ui/title";
import DownArrow from "../icons/down-arrow";
import Card from "../ui/card";
import CarInsurance from "../icons/insurance/car-insurance";
import {getAllReport} from "../../data/report";

/*const DUMMY_DATA = [
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
                txt: 'طرح های جدید بیمه ای دارای مجوز از بیمه مرکزی',
            },
            {
                id: 'r1-6',
                txt: 'لیست ارزیابان خسارت بیمه (سامانه سنهاب)',
            },
            {
                id: 'r1-7',
                txt: 'اوراق مشارکت ، صکوک و سایر اوراق بهادار',
            },
            {
                id: 'r1-8',
                txt: 'اطلاعات تفکیکی نیروی انسانی',
            },
            {
                id: 'r1-9',
                txt: 'عملکرد بیمه گری مستقیم واتکائی به تفکیک رشته های بیمه ای',
            }
        ],
    },
];*/

const ReportItem = () => {

    /*    const [items] = useState(DUMMY_DATA);
        const [numberOfItemsShown, setNumberOfItemsToShown] = useState(4);

        const showMore = () => {
            if (numberOfItemsShown + 3 <= items.length) {
                setNumberOfItemsToShown(numberOfItemsShown + 10);
            } else {
                setNumberOfItemsToShown(numberOfItemsShown + 10);
            }
        };

        const itemsToShow = useMemo(() => {
            return items
                .map((report) => (
                    <li key={report.id}>
                        <div className={styles.info}>
                            <Title onClick={() => {toggle(report.id)}} className={styles.title}>
                                <i></i>
                                {report.title}
                                <DownArrow />
                            </Title>
                            <ul className={opened === (report.id) ? 'active' : null}>
                                {report.children.slice(0, numberOfItemsShown).map((values) => (
                                    <li key={values.id} className={`${styles.items}`}>
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
                        <button className={styles['load-more']} onClick={() => {showMore(report.id)}}>
                            مشاهده همه موارد
                        </button>
                    </li>
                ));
        }, [items, numberOfItemsShown]);

        return (
          <>
              <div className={styles.card}>
                  <ul className={styles.data}>
                      {itemsToShow.length ? itemsToShow : "Loading..."}
                  </ul>
                  <div className={styles.img}>
                      <span className={styles.icon}>
                          <CarInsurance />
                      </span>
                  </div>
              </div>
          </>
        );*/

    const reports = getAllReport();

    const [opened, setOpened] = useState(0);

    const toggle = (id) => {
        if (opened === id) {
            return setOpened(null)
        }
        setOpened(id);
    };

    return (
        <Fragment>
            <div className={styles.card}>
                <ul className={styles.data}>
                    {reports.map((report, i) => {
                        return (
                            <li key={i}>
                                <div className={styles.info}>
                                    <Title onClick={() => {
                                        toggle(i)
                                    }} className={styles.title}>
                                        <i></i>
                                        {report.title}
                                        <DownArrow/>
                                    </Title>
                                    <ul className={`report_desc ${opened === (i) ? 'active' : null}`}>
                                        {report.children.map((item, i) => {
                                            return (
                                                <li key={i} className={styles.items}>
                                                    <div className={styles.tab}>
                                                        <a href={item.file}>
                                                            <span>
                                      <i></i>
                                  </span>
                                                        </a>
                                                        <Card className={styles.txt}>
                                                            <a href={item.file}>
                                                                {item.txt}
                                                            </a>
                                                        </Card>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </Fragment>
    )

};

export default ReportItem;