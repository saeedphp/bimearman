import Image from "next/image";
import styles from './blog-image.module.css';

const BlogImage = (props) => {

    const {title, image} = props;
    const imgPath = `/${image}`;

    return(
      <div className={styles.image}>
          <Image src={imgPath} alt={title} layout={"fill"} />
      </div>
    );

};

export default BlogImage;