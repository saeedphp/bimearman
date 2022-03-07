import styles from './vision-item.module.css';

const VisionItem = (props) => {

    const {id, title} = props;

    return (
        <li key={id} className={styles.items}>
                        <span>
                            <i>

                            </i>
                        </span>
            <p>
                {title}
            </p>
        </li>
    );
};

export default VisionItem;