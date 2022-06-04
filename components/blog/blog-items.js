import React, {Fragment, useState} from 'react';
import styles from "./blog-items.module.css";
import BlogItem from "../home-page/blog/blog-item";
import {getAllEvents} from "../../data/blog";
import Pagination from "./pagination";
import Image from "next/image";
import search from "../../public/images/search.png";

const BlogItems = () => {

    const allBlogs = getAllEvents();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allBlogs.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const nextPage = () => {
        if (currentPage === 3){
            return null;
        }
        setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        if (currentPage === 1){
            return null;
        }
        setCurrentPage(currentPage - 1)
    }

    const [inputText, setInputText] = useState("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    const blogs = getAllEvents();

    const [category, setCategory] = useState("all");
    const categories = Array.from(new Set(blogs.map((b) => b.category)));

    return (
        <Fragment>
            <div className={styles.card}>
                <div className={styles.filter}>
                    <div className={styles.category}>
                        <ul className="categories">
                            <li className={category === "all" ? 'active' : null} onClick={() => setCategory("all")}>
                                همه
                            </li>
                            {categories.map((c, i) => {
                                return (
                                    <li className={category === c ? 'active' : ''} key={i} onClick={() => setCategory(c)}>
                                        {c}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.search}>
                        <span>
                            <Image src={search} alt="search" layout={"fill"} />
                        </span>
                        <input type="text" placeholder="جستجو مقالات" value={inputText} onChange={onChange} />
                    </div>
                </div>
                <div className={styles.main}>
                    {currentPosts.filter((item) => {
                        return (
                            item.title.includes(inputText)
                        )
                    })
                        .map((allBlog, i) => {
                            if (category == "all")
                                return (
                                    <BlogItem
                                        key={allBlog.id}
                                        id={allBlog.id}
                                        title={allBlog.title}
                                        description={allBlog.description}
                                        image={allBlog.image}
                                        date={allBlog.date}
                                        category={allBlog.category}
                                    />
                                );
                            else if (allBlog.category === category)
                                return (
                                    <BlogItem
                                        key={allBlog.id}
                                        id={allBlog.id}
                                        title={allBlog.title}
                                        description={allBlog.description}
                                        image={allBlog.image}
                                        date={allBlog.date}
                                        category={allBlog.category}
                                    />
                                )
                        })}
                </div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={allBlogs.length}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                />
            </div>
        </Fragment>
    );
};

export default BlogItems;