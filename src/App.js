
import './App.css';
import { PRODUCTS } from './data/dataset';

import SearchBarComponent from './components/SearchBarComponent';
import ProductCategoriesComponent from './components/ProductCategoriesComponent';



/**
FilterableProductTable
  SearchBar
  ProductCategoryList
    ProductTable
      ProductRow
 */
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <SearchBarComponent
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />

      <div className="container mx-auto p-4">
        <ProductCategoriesComponent
          products={products}
          filterText={filterText} />
      </div >
    </div>
  );
}


export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

