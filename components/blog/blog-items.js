import React, {Fragment, useState} from 'react';
import styles from "./blog-items.module.css";
import BlogItem from "../home-page/blog/blog-item";
import {getAllEvents} from "../../data/blog";
import Pagination from "./pagination";

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

    return (
        <Fragment>
            <div className={styles.card}>
                <div className={styles.main}>
                    {currentPosts.map((allBlog) => (
                        <BlogItem
                            key={allBlog.id}
                            id={allBlog.id}
                            title={allBlog.title}
                            description={allBlog.description}
                            image={allBlog.image}
                            date={allBlog.date}
                            category={allBlog.category}
                        />
                    ))}
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