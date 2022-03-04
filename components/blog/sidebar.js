import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import Calendar from "../icons/calendar";
import {getAllEvents} from "../../data/blog";

const Sidebar = () => {

    const sidebarBlogs = getAllEvents();

    return (
        <div className={styles.sidebar}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    آخرین اخبار
                </h2>
                <ul>
                    {sidebarBlogs.slice(0,3).map((sidebarBlog) => (
                        <li key={sidebarBlog.id} className={styles.items}>
                            <div className={styles['post-wrapper']}>
                                <div className={styles.image}>
                                    <Link href={sidebarBlog.id}>
                                        <Image src={`/${sidebarBlog.image}`} alt={sidebarBlog.title} layout={"fill"} />
                                    </Link>
                                </div>
                                <div className={styles.info}>
                                    <Link href={sidebarBlog.id}>
                                        <a className={styles.title}>
                                            {sidebarBlog.title}
                                        </a>
                                    </Link>
                                    <time>
                                        <Calendar/>
                                        {sidebarBlog.date}
                                    </time>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;