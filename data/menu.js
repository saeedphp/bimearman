const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'درباره آرمان',
        link: '',
        children: [
            {
                link: '',
                title: 'آیتم یک',
            },
            {
                link: '',
                title: 'آیتم دو',
            },
            {
                link: '',
                title: 'آیتم سه',
            },
        ]
    },
    {
        id: 'm2',
        title: 'محصولات',
        link: '',
        children: [
            {
                link: '',
                title: 'محصول یک',
            },
            {
                link: '',
                title: 'محصول دو',
            },
        ]
    },
    {
        id: 'm3',
        title: 'شبکه فروش',
        link: '',
        children: [
            {
                link: '',
                title: 'شبکه فروش یک',
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
        ],
    },
    {
        id: 'm5',
        title: 'روابط عمومی',
        link: '',
        children: [
            {
                link: '',
                title: 'روابط عمومی یک'
            },
        ],
    },
    {
        id: 'm6',
        title: 'تماس با ما',
        link: 'contactus',
        children: [
            {
                link: '',
                title: 'ارتباط با ما',
            },
        ],
    },
    {
        id: 'm7',
        title: 'گزارشگری و افشای اطلاعات',
        link: '',
    },

];

export const getAllMenu = () => {
  return DUMMY_DATA;
};






