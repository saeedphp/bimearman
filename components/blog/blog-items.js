import styles from "./blog-items.module.css";
import BlogItem from "../home-page/blog/blog-item";
import {getAllEvents} from "../../data/blog";

const BlogItems = () => {

    const allBlogs = getAllEvents();

    return (
        <div className={styles.main}>
            {allBlogs.map((allBlog) => (
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
    );
};

export default BlogItems;