import DownloadCard from "../components/ui/download-card";
import Umbrella from "../components/icons/umbrella";
import Lamp from "../components/icons/product/lamp";

const DUMMY_DATA = [
    {
        id: 'personal insurance',
        tabTitle: 'آشنایی با بیمه اشخاص',
        icon: <Lamp></Lamp>,
        contentTitle: 'معرفی بیمه اشخاص',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.' +
            'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم. تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم. تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم. تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n',
    },
    {
        id: 'insurance statement',
        tabTitle: 'آشنایی با اصطلاحات بیمه اشخاص',
        icon: <Lamp></Lamp>,
        contentTitle: 'معانی برخی از اصطلاحات کاربردی در آیین نامه اجرایی قانون صدر الاشاره',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.',
    },
    {
        id: 'terms',
        tabTitle: 'تعهدات و ضوابط',
        icon: <Lamp></Lamp>,
        contentTitle: 'تعهدات و ضوابط بیمه اشخاص',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.',
    },
    {
        id: 'guidance',
        tabTitle: 'راهنمای صدور بیمه نامه',
        icon: <Lamp></Lamp>,
        contentTitle: 'راهنمای صدور بیمه نامه اشخاص ',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.',
    },
    {
        id: 'help',
        tabTitle: 'راهنمای پرداخت خسارت',
        icon: <Lamp></Lamp>,
        contentTitle: 'معانی برخی از اصطلاحات کاربردی در آیین نامه اجرایی قانون صدر الاشاره',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.درصورتیکه بیمه شده مبلغ خسارت رادرخارج ازکشورشخصا” پرداخت نماید ، میتواند پس از مراجعت ازسفر و درداخل کشور بر حسب مورد وخسارت وارد شده با همراه داشتن اصل صورت حسابهای تایید شده وپاسپورت خود نسبت به پیگیری خسارت اقدام نماید . مشروط بر اینکه ظرف مهلت مقرر خسارت به بیمه گر اعلام شده باشد .',
    },
    {
        id: 'document',
        tabTitle: 'مدارک و شرایط',
        icon: <Lamp></Lamp>,
        contentTitle: 'معانی برخی از اصطلاحات کاربردی در آیین نامه اجرایی قانون صدر الاشاره',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.',
    },
    {
        id: 'download',
        tabTitle: 'دانلود کاتالوگ',
        icon: <Lamp></Lamp>,
        contentTitle: '',
        contentDesc: <DownloadCard>
    <a href="#">جهت دریافت اطلاعات بیشتر، می توانید کاتالوگ بیمه اشخاص را دانلود کنید</a>
</DownloadCard>,
    },

];

export const getALlProduct = () => {
    return DUMMY_DATA;
};