import styles from './representation-form.module.css';
import Input from "../ui/input";
import Button from "../ui/button";
import Textarea from "../ui/textareaa";

const RepresentationForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.controls}>

                <Input
                    label="نام"
                    input={{
                        id: 'name',
                        type: 'text',
                        name: 'name'
                    }}
                />

                <Input
                    label="نام خانوادگی"
                    input={{
                        id: 'family',
                        type: 'text',
                        name: 'family'
                    }}
                />

                <Input
                    label="نام پدر"
                    input={{
                        id: 'father',
                        type: 'text',
                        name: 'father'
                    }}
                />

            </div>

            <div className={styles.controls}>

                <div>
                    <p>
                        جنسیت
                    </p>
                    <Input
                        label="زن"
                        input={{
                            type: 'radio',
                            name: 'gender'
                        }}
                    />
                    <Input
                        label="مرد"
                        input={{
                            type: 'radio',
                            name: 'gender',
                        }}
                    />
                </div>

                <Input
                    label="تاریخ تولد"
                    input={{
                        id: 'birth',
                        type: 'date',
                        name: 'birth'
                    }}
                />

                <Input
                    label="کد ملی"
                    input={{
                        id: 'id',
                        type: 'number',
                        name: 'id',
                        min: '1',
                        max: '10',
                    }}
                />

            </div>

            <div className={styles.controls}>

                <Input
                    label="تلفن همراه"
                    input={{
                        id: 'mobile',
                        type: 'number',
                        name: 'mobile'
                    }}
                />

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

                <Input
                    label="رشته تحصیلی"
                    input={{
                        id: 'field',
                        type: 'text',
                        name: 'field'
                    }}
                />

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

                <Input
                    label="شهر"
                    input={{
                        id: 'city',
                        type: 'text',
                        name: 'city'
                    }}
                />

            </div>

            <div className={styles.controls}>

                <div>
                    <p>
                        آیا سابقه فعالیت در شرکت های بیمه ای را دارید؟
                    </p>
                    <Input
                        label="بله"
                        input={{
                            type: 'radio',
                            name: 'experience'
                        }}
                    />
                    <Input
                        label="خیر"
                        input={{
                            type: 'radio',
                            name: 'experience',
                        }}
                    />
                </div>

            </div>

            <div className={`${styles.controls} ${styles.txtControls}`}>

                <Textarea
                    label="توضیحات"
                    textarea={{
                        id: 'desc',
                        name: 'desc'
                    }}
                />

            </div>

            <Button>
                ثبت نهایی درخواست
            </Button>

        </form>
    )
};

export default RepresentationForm;