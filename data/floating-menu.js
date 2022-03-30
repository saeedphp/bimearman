import User from "../components/icons/floating-menu/user";
import Earth from "../components/icons/floating-menu/earth";
import Mail from "../components/icons/floating-menu/mail";

const DUMMY_DATA = [
    {
        id: 'f1',
        title: 'ورود به پنل کاربری',
        link: 'https://samfa.armanins.com/SamfaProject/',
        icon: <User />
    },
    {
        id: 'f2',
        title: 'شبکه فروش',
        link: 'https://e.armanins.com/BimeSiteMVC/Common/locationlist/Index',
        icon: <Earth />
    },
    {
        id: 'f3',
        title: 'پست الکترونیکی',
        link: 'https://mymail.armanins.com/',
        icon: <Mail />
    },
];

export const getFloatingMenu = () => {
    return DUMMY_DATA;
};