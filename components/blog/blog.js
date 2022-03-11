import React, {Fragment, useState} from "react";
import PageHeader from "../ui/page-header";
import styles from './blog.module.css';
import BlogItems from "./blog-items";
import Sidebar from "./sidebar";

const Blog = () => {

    return (
        <Fragment>
            <PageHeader/>
            <section className={styles.blog}>
                <Sidebar/>
                <BlogItems/>
            </section>
        </Fragment>
    );
};

export default Blog;