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
        const { data: products, markOutOfStock, removeOutOfStock, addNew } = this.props;
        const productItems = products.map((product) => (
           <ProductItem key={product.id} {...{product, markOutOfStock}} />
        ));
        return (
            <>
                <h1>Products</h1>
                <hr />
                <ProductsCount data={products} />
                <NewProduct addNew={addNew} />
                <ol className="productsList">
                    {productItems}
                </ol>
                <button onClick={() => removeOutOfStock(products)}>
                    Remove All Out Of Stock Products
                </button>
            </>
        )
    }
}

function mapStateToProps(storeState){
    const products = storeState.productsState;
    return { data : products };
}
function mapDispatchToProps(dispatch){
    var productActionDispatchers = bindActionCreators(productActionCreators, dispatch);
    return productActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);