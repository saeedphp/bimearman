import {Fragment, useState} from "react";
import styles from './login.module.css';
import {NextSeo} from "next-seo";
import PageHeader from "../ui/page-header";
import imgPath from "../../public/images/page-header.webp";
import Card from "../ui/card";
import Eye from "../icons/eye";
import Button from "../ui/button";

const Login = () => {

    const [shown, setShown] = useState(false);

    const togglePassVisibility = () => {
        setShown(shown ? false : true);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <NextSeo title="ورود">

            </NextSeo>
            <section className={styles.login}>
                <Card className={styles.card}>
                    <h2 className={styles.title}>
                        فرم ورود
                    </h2>
                    <form onSubmit={submitHandler}>

                        <div className={styles.controls}>
                            <label htmlFor="username">
                                نام کاربری
                            </label>
                            <input id="username" name="username" type="text"/>
                        </div>

                        <div className={styles.controls}>
                            <label htmlFor="password">
                                رمز عبور
                            </label>
                            <input id="password" name="password" type={shown ? 'text' : 'password'}/>
                            <Eye onClick={togglePassVisibility}/>
                        </div>

                        <div>
                            <Button>
                                ورود
                            </Button>
                        </div>

                    </form>
                </Card>
            </section>
        </Fragment>
    )
};

export default Login;