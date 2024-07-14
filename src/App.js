
import './App.css';
import { PRODUCTS } from './data/dataset';
import SearchBarComponent from './components/SearchBarComponent';
import ProductCategoriesComponent from './components/ProductCategoriesComponent';
import { APP_DESCRIPTION, APP_NAME, APP_ONE_LINER } from './utils/Constants';



/**
FilterableProductTable
  SearchBarComponent
  ProductCategoriesComponent
    ProductCategoryTableComponent
    ProductTableComponent
 */
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [globalSearchText, setGlobalSearchText] = useState('');




  return (
    <div className="container mx-auto p-6 rounded-lg shadow-lg bg-white">
      <div className="top-section">
        <div className="top-section-text">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">{APP_NAME}</h1>
          <p className="text-2xl mb-6 text-gray-600">{APP_ONE_LINER}</p>
          <p className="text-lg mb-6 text-gray-500 leading-relaxed">{APP_DESCRIPTION}</p>
        </div>
      </div>

      <SearchBarComponent
        filterText={globalSearchText}
        onGlobalSearchText={setGlobalSearchText}
      />

      <div className="container mx-auto p-4">
        <ProductCategoriesComponent
          products={products}
          globalSearchText={globalSearchText} />

      </div >
    </div >
  );
}


export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

