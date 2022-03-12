const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'درباره آرمان',
        link: '',
        children: [
            {
                link: 'about/vision',
                title: 'چشم انداز های بیمه آرمان',
            },
            {
                link: 'about/personel',
                title: 'پرسنل و اعضای بیمه آرمان',
            },
            {
                link: 'about/intro',
                title: 'بیمه آرمان در یک نگاه',
            },
        ]
    },
    {
        id: 'm2',
        title: 'محصولات',
        link: '',
        children: [
            {
                link: 'products/insurance',
                title: 'بیمه اشخاص',
            },
        ]
    },
    {
        id: 'm3',
        title: 'شبکه فروش',
        link: '',
        children: [
            {
                id: 'm3-1',
                link: 'salesnetwork/rules',
                title: 'قوانین و مقررات',
            },
            {
                id: 'm3-2',
                link: 'salesnetwork/representation',
                title: 'اخذ نمایندگی',
            },
        ],
    },
    {
        id: 'm4',
        title: 'قوانین و مقررات',
        link: '',
        children: [
            {
                id: 'm4-1',
                link: 'rules/brochure',
                title: 'بروشور',
            },
            {
                id: 'm4-2',
                link: 'rules/terms',
                title: 'شرایط عضویت در هیات مدیره',
            },
            {
                id: 'm4-3',
                link: 'rules/generalconditions',
                title: 'شرایط عمومی بیمه نامه',
            },
        ],
    },
    {
        id: 'm5',
        title: 'روابط عمومی',
        link: '',
        children: [
            {
                link: 'blog',
                title: 'بلاگ'
            },
        ],
    },
    {
        id: 'm6',
        title: 'تماس با ما',
        link: 'contactus',
    },
    {
        id: 'm7',
        title: 'گزارشگری و افشای اطلاعات',
        link: 'reporting',
    },

];

export const getAllMenu = () => {
  return DUMMY_DATA;
};






