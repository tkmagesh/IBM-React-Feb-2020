import React from 'react';
import './index.css';
import ProductItem from './views/ProductItem';
import NewProduct  from './views/NewProduct';
import ProductsCount  from './views/ProductsCount';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActionCreators from './actions';

class Products extends React.Component {
    render = () => {
        const { data: products, categories, markOutOfStock, removeOutOfStock, addNew, loadProducts } = this.props;
        const productItems = products.map((product) => (
           <ProductItem key={product.id} {...{product, markOutOfStock}} />
        ));
        return (
            <>
                <button onClick={loadProducts}>Load Products</button>
                <h1>Products</h1>
                <hr />
                <ProductsCount data={products} />
                {categories.length ? (<NewProduct addNew={addNew} categories={categories} />) : null }
                <ol className="productsList">
                    {productItems}
                </ol>
                <button onClick={() => removeOutOfStock()}>
                    Remove All Out Of Stock Products
                </button>
            </>
        )
    }
}

function mapStateToProps(storeState){
    const products = storeState.productsState,
        categories = storeState.categoriesState.categories,
        selectedCategory = storeState.categoriesState.selectedCategory;
    if (selectedCategory === ''){
        return { data : products, categories : categories };
    } else {
        return { data: products.filter(product => product.category === selectedCategory.name), categories: categories};
    }
}
function mapDispatchToProps(dispatch){
    var productActionDispatchers = bindActionCreators(productActionCreators, dispatch);
    return productActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);