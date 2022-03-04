import styles from "./general-conditions-items.module.css";
import FaqItem from "../../icons/faq-item";
import {Fragment, useState} from "react";
import DownArrow from "../../icons/down-arrow";
import ActiveArrow from "../../icons/active-arrow";

const GeneralConditionsItems = (props) => {

    const [opened, setOpened] = useState(false);

    const {id, question, answer} = props;

    const toggle = (id) => {
        if (opened === id) {
            setOpened(false);
        }
        setOpened(id);
    };

    return (
        <Fragment>

            <div key={id} className={styles.items}>
                <div onClick={() => toggle(id)}
                     className={`faqTitle ${styles['faq-question']} ${opened === (id) ? 'active' : null}`}>
                    <div className={`icon ${styles['icon-part']}`}>
                        <FaqItem/>
                        <h3>
                            {question}
                        </h3>
                    </div>

                    <span>
                        {opened === (id) ?
                            <ActiveArrow/>
                            :
                            <DownArrow/>
                        }
                    </span>

                </div>
                {opened === (id) ? (
                        <div className={`faqItem ${styles['faq-answer']} ${opened === (id) ? 'active' : null}`}>
                            <p>
                                {answer}
                            </p>
                        </div>
                    ) :
                    null
                }
            </div>

        </Fragment>
    );
};

export default GeneralConditionsItems;