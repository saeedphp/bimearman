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
                title: 'آیتم یک',
            },
            {
                link: '',
                title: 'آیتم یک',
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
                title: 'آیتم دو',
            },
        ]
    },
    {
        id: 'm3',
        title: 'شبکه فروش',
        link: '',
    },
    {
        id: 'm4',
        title: 'قوانین و مقررات',
        link: '',
    },
    {
        id: 'm5',
        title: 'روابط عمومی',
        link: '',
    },
    {
        id: 'm6',
        title: 'تماس با ما',
        link: '',
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






