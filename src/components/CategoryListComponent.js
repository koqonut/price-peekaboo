// src/components/CategoryListComponent.js
import React from 'react';

const CategoryListComponent = ({ categories, onSelectCategory }) => {
    return (
        <div className="category-list">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className="mb-2">
                        <button
                            className="text-left text-blue-600 hover:underline focus:outline-none"
                            onClick={() => onSelectCategory(category)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryListComponent;
