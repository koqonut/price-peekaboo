// src/components/CategoryListComponent.js
import React from 'react';

const CategoryListComponent = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="category-list">


            <div className="image-boundary"></div>

            <h2 className="category-heading">Categories</h2>
            <ul>
                <li className={`category-list-item mb-2 ${selectedCategory === 'All' ? 'selected' : ''}`}>
                    <button
                        className="text-left text-blue-600 hover:underline focus:outline-none"
                        onClick={() => onSelectCategory("All")}
                    >
                        All
                    </button>
                </li>
                {categories.map((category, index) => (
                    <li key={index} className={`category-list-item mb-2 ${selectedCategory === category ? 'selected' : ''}`}>
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
