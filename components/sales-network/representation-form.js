import styles from './representation-form.module.css';
import Button from "../ui/button";

const RepresentationForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.controls}>






            </div>

            <div className={styles.controls}>

                <div>
                    <p>
                        جنسیت
                    </p>

                </div>




            </div>

            <div className={styles.controls}>



                <div className={styles.ostan}>
                    <label>
                        آخرین مدرک تحصیلی
                    </label>
                    <select>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                </div>


            </div>

            <div className={styles.controls}>

                <div className={styles.ostan}>
                    <label>
                        وضعیت نظام وظیفه
                    </label>
                    <select>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                </div>

                <div className={styles.ostan}>
                    <label>
                        استان
                    </label>
                    <select>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                </div>



            </div>

            <div className={styles.controls}>

                <div>
                    <p>
                        آیا سابقه فعالیت در شرکت های بیمه ای را دارید؟
                    </p>

                </div>

            </div>

            <div className={`${styles.controls} ${styles.txtControls}`}>

            </div>

            <Button>
                ثبت نهایی درخواست
            </Button>

        </form>
    )
};

export default RepresentationForm;