
import React from 'react';

const ProductCategoryTableComponent = ({ category }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h1 className="text-xl font-semibold text-gray-900">{category}</h1>
        </div>
    );
};

export default ProductCategoryTableComponent;
