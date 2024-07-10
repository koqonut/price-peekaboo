import React from 'react';

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
    return (
        <form className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={filterText}
                    placeholder="Search..."
                    onChange={(e) => onFilterTextChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-900">
                    Only show products in stock
                </label>
            </div>
        </form>
    );
};

export default SearchBar;
