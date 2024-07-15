
import React from 'react';

const ProductCategoryTableComponent = ({ category }) => {
    return (
        <div className="bg-white  rounded-lg mb-1 text-center">
            <h1 className="text-xl font-semibold text-gray-900">{category}</h1>
        </div>
    );
};

export default ProductCategoryTableComponent;
