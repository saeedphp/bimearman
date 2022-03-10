const DUMMY_DATA = [
    {
        id: 'r1',
        title: 'گزارشگری و افشای اطلاعات',
        children: [
            {
                id: 'r1-1',
                report: 'مشخصات ثبتی شرکت',
            },
            {
                id: 'r1-2',
                report: 'اساسنامه شرکت',
            },
            {
                id: 'r1-3',
                report: 'مشخصات و اطلاعات مدیران شرکت',
            },
            {
                id: 'r1-4',
                report: 'چشم انداز، ماموریت و اهداف راهبردی',
            },
        ],
    },
];

export const getAllReport = () => {
    return DUMMY_DATA;
};