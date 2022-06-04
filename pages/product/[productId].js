import React, {Fragment, useState} from "react";
import {useRouter} from "next/router";
import {getProductById, getProducts} from "../../data/product-insurance";
import Title from "../../components/ui/title";
import bgHeader from "../../public/images/page-header.webp";
import PageHeader from "../../components/ui/page-header";
import ProductDetail from "../../components/product-detail/product-detail";
import {NextSeo} from "next-seo";
import products from '../../data/product-insurance';

const ProductDetailPage = () => {

    const router = useRouter();
    const {productId} = router.query;
    //const products = getProductById(productId);
    let currProduct = null;
    const allProducts = getProducts();

    /*if (!products) {
        return (
            <Title>
                هیچ محصولی ای یافت نشد!
            </Title>
        )
    }*/

    for (let product of products) {
        if (product.id == productId) {
            currProduct = product;
            return (
                <Fragment>
                    <NextSeo title={currProduct.title}>

                </NextSeo>
                <PageHeader title={currProduct.title} pageTitle="محصولات" pageLink="/product" bg={bgHeader}/>
                    <NextSeo title={currProduct.title}>

                    </NextSeo>
                    <ProductDetail
                        detail={currProduct.detail}
                    />
                </Fragment>
            );
        }
    }

    return null;


};

export default ProductDetailPage;