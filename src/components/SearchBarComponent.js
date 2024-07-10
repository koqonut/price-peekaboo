import React from 'react';

const SearchBarComponent = ({ filterText, inStockOnly, onFilterTextChange }) => {
    return (
        <form className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={filterText}
                    placeholder="Search for Item"
                    onChange={(e) => onFilterTextChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </form>
    );
};

export default SearchBarComponent;
