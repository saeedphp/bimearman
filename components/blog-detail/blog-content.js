import {Fragment} from "react";
import styles from './blog-content.module.css';

const BlogContent = (props) => {

    const {title, description} = props;

    return (
        <Fragment>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.desc}>
                    {description}
                </p>
            </div>
        </Fragment>
    );
};

export default BlogContent;