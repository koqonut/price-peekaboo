
import React from 'react';
import ProductRowComponent from './ProductRowComponent.js';
import { COL_HEADING_CITY, COL_HEADING_LASTUPDATEDDATE, COL_HEADING_STORE, COL_HEADING_PRICE, COL_HEADING_NAME } from '../Constants.js';



const ProductTableComponent = ({ products, filterText, inStockOnly }) => {
    const rows = [];

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        rows.push(
            <ProductRowComponent product={product} key={product.name} />
        );
    });

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-md sm:rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        {COL_HEADING_NAME}
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        {COL_HEADING_PRICE}
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        {COL_HEADING_STORE}
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        {COL_HEADING_CITY}
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        {COL_HEADING_LASTUPDATEDDATE}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTableComponent;
