import React from 'react';

const SearchBarComponent = ({ filterText, onGlobalSearchText }) => {
    return (
        <form className="container mx-auto p-1  max-w-[35%] text-center">
            <div className="mb-4">
                <h2 className="text-2l font-semibold mb-2">Search</h2>
                <input
                    type="text"
                    value={filterText}
                    placeholder="Search for an item"
                    onChange={(e) => onGlobalSearchText(e.target.value)}
                    className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </form>
    );
};

export default SearchBarComponent;
