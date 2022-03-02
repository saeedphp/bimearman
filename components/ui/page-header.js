import Image from "next/image";
import imgPath from '../../public/images/page-header.webp';

const PageHeader = () => {
    return (
        <>
            <div>
                <Image src={imgPath} alt="page header image" layout={"fill"} />
            </div>
        </>
    )
};

export default PageHeader;