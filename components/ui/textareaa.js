import React, {useRef} from 'react';
import styles from './textareaa.module.css';

const Textarea = React.forwardRef((props, ref) => {
    return (
        <div className={styles.textarea}>
            <label htmlFor={props.textarea.id}>
                {props.label}
            </label>
            <textarea ref={ref} {...props.textarea}>

            </textarea>
        </div>
    );
});

export default Textarea;