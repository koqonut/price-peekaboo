import './App.css';
import { PRODUCTS } from './data/dataset';
import SearchBarComponent from './components/SearchBarComponent';
import ProductCategoriesComponent from './components/ProductCategoriesComponent';
import { APP_DESCRIPTION, APP_ONE_LINER } from './utils/Constants';
import ResponsiveHeader from './components/ResponsiveHeaderComponent';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import CategoryListComponent from './components/CategoryListComponent';

function FilterableProductTable({ products }) {
  const [globalSearchText, setGlobalSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    setCategories(uniqueCategories);
  }, [products]);

  return (
    <div >

      <div className="header p-6 rounded-lg shadow-lg bg-white">
        <ResponsiveHeader />
        <div className="text-center p-2 text-black">
          <p className="text-sm sm:text-lg mt-2">{APP_ONE_LINER}</p>
          <p className="text-sm sm:text-lg mt-2">{APP_DESCRIPTION}</p>
        </div>
        <SearchBarComponent
          filterText={globalSearchText}
          onGlobalSearchText={setGlobalSearchText}
        />
      </div>

      <div className="main-container mx-auto p-6 rounded-lg shadow-lg bg-white" >

        <div className="content">
          <div className="left-panel">
            <CategoryListComponent
              categories={categories}
              onSelectCategory={setSelectedCategory}
            />          </div>
          <div className="right-panel">
            <ProductCategoriesComponent
              products={products}
              globalSearchText={globalSearchText}
            />
          </div>
        </div>


      </div>
      <Footer className="footer" />
    </div>

  );
}

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
