import React from 'react';

const ProductRowComponent = ({ product }) => {
    return (
        <tr className="bg-white border-b hover:bg-gray-50 transition duration-300 ease-in-out">
            <td className="text-sm text-gray-900 font-medium px-6 py-4">{product.name}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4">{product.price}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4">{product.store}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4">{product.city}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4">{product.lastUpdatedDate}</td>
        </tr>
    );
};

export default ProductRowComponent;
