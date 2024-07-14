
import './App.css';

import { PRODUCTS } from './data/dataset';
import SearchBarComponent from './components/SearchBarComponent';
import ProductCategoriesComponent from './components/ProductCategoriesComponent';
import { APP_DESCRIPTION, APP_ONE_LINER } from './utils/Constants';
import ResponsiveHeader from './components/ResponsiveHeaderComponent';



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
      <ResponsiveHeader />


      <div className="text-center p-2 text-black">
        <p className="text-sm sm:text-lg mt-2">{APP_ONE_LINER}</p>
        <p className="text-sm sm:text-lg mt-2">{APP_DESCRIPTION}</p>
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

