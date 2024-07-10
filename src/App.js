
import './App.css';
import { PRODUCTS } from './data/dataset';
import { COL_HEADING_CITY, COL_HEADING_LASTUPDATEDDATE, COL_HEADING_STORE, COL_HEADING_PRICE, COL_HEADING_NAME } from './Constants.js';


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
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />

      <ProductCategories
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div >

  );
}

function ProductCategories({ products, filterText, inStockOnly }) {
  const rows = [];
  const categoryToProductMap = new Map();

  products.forEach((product) => {
    if (!categoryToProductMap.get(product.category)) {
      categoryToProductMap.set(product.category, new Map())
    }
    categoryToProductMap.get(product.category).set(product.name, product);
  });


  categoryToProductMap.forEach((productsMap, productCategory) => {
    //console.log("KN_ Size of map", productCategory, productsMap.size);
    const productCategoriesArray = Array.from(productsMap.values());

    rows.push(
      <ProductCategoryRow
        category={productCategory}
        key={productCategory} />
    );
    rows.push(<ProductTable products={productCategoriesArray} filterText={filterText} isStockOnly={inStockOnly} key={`${productCategory}-table`}></ProductTable>);
    // console.log("KN_ ProductCategories Rows are ", rows);

  });

  return (
    <>
      {rows}
    </>
  );
}


function ProductCategoryRow({ category }) {
  return (
    <h1>
      {category}
    </h1>
  );
}


function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    );
  });

  var result = (

    <table>
      <thead>
        <tr>
          <th>{COL_HEADING_NAME}</th>
          <th>{COL_HEADING_PRICE}</th>
          <th>{COL_HEADING_STORE}</th>
          <th>{COL_HEADING_CITY}</th>
          <th>{COL_HEADING_LASTUPDATEDDATE}</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>

  );
  //console.log("KN_ Producttable result is ", result)
  return result;
}

function ProductRow({ product }) {

  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;
  var result = (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      <td>{product.store}</td>
      <td>{product.city}</td>
      <td>{product.lastUpdatedDate}</td>
    </tr>
  )
  //console.log("KN_ ProductRow result is ", result)
  return result;
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input
        type="text"
        value={filterText} placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}


export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

