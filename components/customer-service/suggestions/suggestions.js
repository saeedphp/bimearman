import {Fragment} from "react";
import styles from './suggestions.module.css';
import PageHeader from "../../ui/page-header";
import Card from "../../ui/card";
import Button from "../../ui/button";
import Input from "../../ui/input";
import Textarea from "../../ui/textareaa";

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
                            <Input
                                label="نام و نام خانوادگی*"
                                input={{
                                    id: 'name',
                                    type: 'text',
                                    name: 'name'
                                }}
                            />
                            <Input
                                label="موبایل*"
                                input={{
                                    id: 'mobile',
                                    type: 'tel',
                                    name: 'mobile'
                                }}
                            />
                        </div>
                        <Textarea
                            label="انتقادات و پیشنهادات شما"
                            textarea={{
                                id: 'suggest',
                                name: 'suggest',
                            }}
                        />
                        <Button className={styles.button} onClick={submitHandler}>
                            ارسال پیام
                        </Button>
                    </form>
            </Card>
        </Fragment>
    )
};

export default Suggestions;