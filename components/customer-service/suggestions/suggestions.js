import {Fragment} from "react";
import styles from './suggestions.module.css';
import PageHeader from "../../ui/page-header";
import Card from "../../ui/card";
import Button from "../../ui/button";

const Suggestions = () => {

    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Fragment>
            <PageHeader/>
            <Card className={styles.suggestion}>
                    <h2>
                        بیمه آرمان پذیرای هر گونه انتقادات و پیشنهادات از سمت شما می باشد.
                    </h2>
                    <form>

                        <div className={styles.controls}>
                            <div className={styles.control}>
                                <label>
                                    نام و نام خانوادگی*
                                </label>
                                <input type="text" name="name" id="name" />
                            </div>

                            <div className={styles.control}>
                                <label>
                                    شماره موبایل*
                                </label>
                                <input type="number" name="mobile" id="mobile" />
                            </div>
                        </div>

                        <div className={styles.txt}>
                            <label>
                                انتقاد و پیشنهادات شما*
                            </label>
                            <textarea name="suggest" id="suggest">

                            </textarea>
                        </div>

                        <Button className={styles.button} onClick={submitHandler}>
                            ارسال پیام
                        </Button>
                    </form>
            </Card>
        </Fragment>
    )
};

export default Suggestions;