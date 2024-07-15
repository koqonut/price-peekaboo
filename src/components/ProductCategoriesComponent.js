// src/components/ProductCategoriesComponent.js
import React from 'react';
import ProductCategoryTableComponent from './ProductCategoryTableComponent';
import ProductTableComponent from './ProductTableComponent';

const ProductCategoriesComponent = ({ products, globalSearchText, selectedCategory }) => {
    const rows = [];
    const categoryToProductMap = new Map();

    products.forEach(product => {
        if (!categoryToProductMap.get(product.category)) {
            categoryToProductMap.set(product.category, []);
        }
        categoryToProductMap.get(product.category).push(product);
    });

    if (selectedCategory === "All") {
        const filteredProducts = products.filter(product => {
            if (globalSearchText && product.name.toLowerCase().indexOf(globalSearchText.toLowerCase()) === -1) {
                return false;
            }
            return true;
        });

        if (filteredProducts.length > 0) {
            rows.push(
                <ProductCategoryTableComponent
                    category={"All"}
                    key={"All"}
                />
            );
            rows.push(
                <ProductTableComponent
                    products={filteredProducts}
                    globalSearchText={globalSearchText}
                    key="All-table"
                />
            );
        }

    } else {
        const productsArray = categoryToProductMap.get(selectedCategory) || [];
        const filteredProducts = productsArray.filter(product => {
            if (globalSearchText && product.name.toLowerCase().indexOf(globalSearchText.toLowerCase()) === -1) {
                return false;
            }
            return true;
        });

        if (filteredProducts.length > 0) {
            rows.push(
                <ProductCategoryTableComponent
                    category={selectedCategory}
                    key={selectedCategory}
                />
            );
            rows.push(
                <ProductTableComponent
                    products={filteredProducts}
                    globalSearchText={globalSearchText}
                    key={`${selectedCategory}-table`}
                />
            );
        }
    }

    return <>{rows}</>;
};

export default ProductCategoriesComponent;
