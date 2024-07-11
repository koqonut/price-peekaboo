
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
    <div className="container mx-auto p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-2 text-center">{APP_NAME}</h1>
      <p className="text-xl mb-4 text-center">{APP_ONE_LINER}</p>
      <p className="text-xl mb-4 text-center">{APP_DESCRIPTION}</p>
      <SearchBarComponent
        filterText={globalSearchText}
        onGlobalSearchText={setGlobalSearchText}
      />

      <div className="container mx-auto p-4">
        <ProductCategoriesComponent
          products={products}
          globalSearchText={globalSearchText} />
      </div >
    </div>
  );
}


export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

