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

    const [category, setCategory] = useState("all");
    const categories = Array.from(new Set(allBlogs.map((b) => b.category)));

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
                <ul className="categories">
                    <li className={category === "all" ? 'active' : null} onClick={() => setCategory("all")}>
                        همه
                    </li>
                    {categories.slice(0,4).map((c, i) => {
                        return (
                            <li className={category === c ? 'active' : ''} key={i} onClick={() => setCategory(c)}>
                                {c}
                            </li>
                        )
                    })}

                </ul>
            </div>

            <div className={toggle === 1 ? styles['blog-posts__active'] : styles['blog-posts']}>
                {allBlogs.slice(0,4).map((allBlog, i) => {
                    if (category == "all"){
                        return (
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
                        )
                    }else if (allBlog.category === category){
                        return (
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
                        )
                    }
                })}
            </div>

        </section>
    )
};

export default Blog;