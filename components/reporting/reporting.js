import {Fragment} from "react";
import PageHeader from "../ui/page-header";
import styles from './reporting.module.css';
import ReportItem from "./report-item";
import ReportRisk from "./report-risk";
import FinancialReport from "./financial-report";
import BranchReport from "./branch-report";

const Reporting = () => {

    return (
      <Fragment>
          <PageHeader />
          <section className={styles.reporting}>
              <ReportItem />
              <ReportRisk />
              <FinancialReport />
              <BranchReport />
          </section>
      </Fragment>
    );
};

export default Reporting;