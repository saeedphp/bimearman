import Image from "next/image";
import imgPath from '../../public/images/page-header.webp';
import BreadcrumbItem from "../breadcrumb/breadcrum-item";
import Breadcrumb from "../breadcrumb/breadcrumb";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import styles from './page-header.module.css';

const PageHeader = ({title}) => {

    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState();

    useEffect(() => {
        const pathWithoutQuery = router.asPath.split("?")[0];
        let pathArray = pathWithoutQuery.split("/");
        pathArray.shift();

        pathArray = pathArray.filter((path) => path !== "");

        const breadcrumbs = pathArray.map((path, index) => {
            const href = "/" + pathArray.slice(0, index + 1).join("/");
            return {
                href,
                label: path.charAt(0).toUpperCase() + path.slice(1),
                isCurrent: index === pathArray.length - 1,
            };
        });

        setBreadcrumbs(breadcrumbs);
    }, [router.asPath]);

    return (
        <>
            <div className={styles['page-header']}>
                <Breadcrumb>
                    <BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
                        خانه
                    </BreadcrumbItem>
                    {breadcrumbs &&
                        breadcrumbs.map((breadcrumb) => (
                            <BreadcrumbItem
                                key={breadcrumb.href}
                                href={breadcrumb.href}
                                isCurrent={breadcrumb.isCurrent}
                            >
                                {breadcrumb.label}
                            </BreadcrumbItem>
                        ))}
                </Breadcrumb>
                <h2 style={{position: 'absolute'}}>
                    {title}
                </h2>
                <Image src={imgPath} alt="page header image" layout={"fill"} />
            </div>
        </>
    )
};

export default PageHeader;