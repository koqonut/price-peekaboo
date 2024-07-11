// src/components/ProductCategoriesComponent.js
import React from 'react';
import ProductCategoryTableComponent from './ProductCategoryTableComponent';
import ProductTableComponent from './ProductTableComponent';

const ProductCategoriesComponent = ({ products, globalSearchText }) => {
    const rows = [];
    const categoryToProductMap = new Map();

    products.forEach(product => {
        if (!categoryToProductMap.get(product.category)) {
            categoryToProductMap.set(product.category, []);
        }
        categoryToProductMap.get(product.category).push(product);
    });

    categoryToProductMap.forEach((productsArray, productCategory) => {
        // Filter products for the current category
        const filteredProducts = productsArray.filter(product => {
            if (globalSearchText && product.name.toLowerCase().indexOf(globalSearchText.toLowerCase()) === -1) {
                return false;
            }
            return true;
        });

        // Only render the category if there are matching products
        if (filteredProducts.length > 0) {
            rows.push(
                <ProductCategoryTableComponent
                    category={productCategory}
                    key={productCategory}
                />
            );
            rows.push(
                <ProductTableComponent
                    products={filteredProducts}
                    globalSearchText={globalSearchText}
                    key={`${productCategory}-table`}
                />
            );
        }
    });

    return <>{rows}</>;
};

export default ProductCategoriesComponent;
