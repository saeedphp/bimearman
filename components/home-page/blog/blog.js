import React, {useState} from 'react';
import styles from './blog.module.css';
import Link from "next/link";
import Image from "next/image";
import imgPath from '../../../public/images/blog/post-1.webp';
import Calendar from "../../icons/calendar";
import Button from "../../ui/button";
import {getAllEvents, getBlogByCategory, getEvents, getNews} from "../../../data/blog";
import BlogItem from "./blog-item";

const Blog = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
      setToggle(index);
    }

    const allBlogs = getAllEvents();

    /*get Roydad category posts*/
    const events = getEvents();

    /*get Eghtesad category posts*/
    const news = getNews();

    return (
        <section className={styles.blog}>

            <div className={styles['row-info']}>
                <h2 className={styles.title}>
                    اخبار و رویداد ها
                </h2>
                <ul>
                    <li className={toggle === 1 ? styles['tab-active'] : styles.tab} onClick={() => {toggleTab(1)}}>
                        همه
                    </li>
                    <li className={toggle === 2 ? styles['tab-active'] : styles.tab} onClick={() => {toggleTab(2)}}>
                        رویداد های آرمان
                    </li>
                    <li className={toggle === 3 ? styles['tab-active'] : styles.tab} onClick={() => {toggleTab(3)}}>
                        اقتصاد و دارایی
                    </li>
                </ul>
            </div>

            <div className={toggle === 1 ? styles['blog-posts__active'] : styles['blog-posts']}>
                {allBlogs.slice(0,3).map((allBlog) => (
                    <BlogItem
                        key={allBlog.id}
                        id={allBlog.id}
                        title={allBlog.title}
                        description={allBlog.description}
                        category={allBlog.category}
                        image={allBlog.image}
                        date={allBlog.date}
                        link={allBlog.link}
                    />
                ))}
            </div>

            <div className={toggle === 2 ? styles['blog-posts__active'] : styles['blog-posts']}>
                {events.slice(0,3).map((event) => (
                    <BlogItem
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        description={event.description}
                        category={event.category}
                        image={event.image}
                        date={event.date}
                        link={event.link}
                    />
                ))}
            </div>

            <div className={toggle === 3 ? styles['blog-posts__active'] : styles['blog-posts']}>
                {news.slice(0,3).map((item) => (
                    <BlogItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        date={item.date}
                        link={item.link}
                    />
                ))}
            </div>

        </section>
    )
};

export default Blog;