import React from 'react';
import './index.css';
import ProductItem from './views/ProductItem';
import NewProduct  from './views/NewProduct';


export class Products extends React.Component {
    render = () => {
        const { data: products, markOutOfStock, removeOutOfStock, addNew } = this.props;
        const productItems = products.map((product) => (
           <ProductItem key={product.id} {...{product, markOutOfStock}} />
        ));
        return (
            <>
                <h1>Products</h1>
                <hr />
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



export class ProductsCount extends React.Component {
    render = () => {
        const products = this.props.data,
            outOfStockCount = products.reduce((prevResult, product) => product.isOutOfStock ? ++prevResult : prevResult, 0);
        return (
            <div>
                <span>Stats : </span>
                <span className="outOfStock">{outOfStockCount}</span> / <span>{products.length} </span>
            </div>
        )
    }
}