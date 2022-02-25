import styles from "./blog-item.module.css";
import Link from "next/link";
import Image from "next/image";
import Calendar from "../../icons/calendar";
import Button from "../../ui/button";
import React from "react";

const BlogItem = (props) => {
    
    const {id, title, description, category, image, date, link} = props;
    
    const excerpt = description.slice(0,137) + '...';
    const imgPath = `/${image}`;
    const postLink = `/blog/${id}`;
    const humanReadableTime = new Date(date).toLocaleDateString('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    
    return (

        <div className={styles.items}>
            <div className={styles.imageWrapper}>
                <Link href={postLink}>
                    <a className={styles.category}>
                        {category}
                    </a>
                </Link>
                <Image src={imgPath} alt={title} layout={"fill"} />
            </div>
            <Link href={postLink}>
                <a>
                    {title}
                </a>
            </Link>
            <p>
                {excerpt}
            </p>
            <div className={styles.controls}>
                <time>
                    <Calendar />
                    {humanReadableTime}
                </time>
                <Button link={postLink}>
                    بیشتر بخوانید
                </Button>
            </div>
        </div>
        
    );
};

export default BlogItem;