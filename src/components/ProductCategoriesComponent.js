import ProductCategoryTableComponent from './ProductCategoryTableComponent';
import ProductTableComponent from './ProductTableComponent';

const ProductCategoriesComponent = ({ products, filterText, inStockOnly }) => {
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
            <ProductCategoryTableComponent
                category={productCategory}
                key={productCategory} />
        );
        rows.push(<ProductTableComponent products={productCategoriesArray} filterText={filterText} isStockOnly={inStockOnly} key={`${productCategory}-table`}></ProductTableComponent>);
        // console.log("KN_ ProductCategories Rows are ", rows);

    });

    return (
        <>
            {rows}
        </>
    );
}

export default ProductCategoriesComponent;