import React from 'react';
import './index.css';

const ProductItem = ({product, markOutOfStock}) => (
    <li>
        {product.isOutOfStock ? (<div className="outOfStock">{product.name}</div>) : (<div>{product.name}</div>)}
        <button onClick={() => markOutOfStock(product)}>
            Mark Out of Stock
        </button>
        <button>Remove</button>
    </li>
)

export class Products extends React.Component {
    state = {
        newProductName: '',

    };
    onAddNewClick = () => {
        const { newProductName } = this.state;
        this.props.addNew(newProductName);
    }
    render = () => {
        const { data: products, markOutOfStock, removeOutOfStock } = this.props;
        const productItems = products.map((product) => (
           <ProductItem key={product.id} {...{product, markOutOfStock}} />
        ));
        return (
            <>
                <h1>Products</h1>
                <hr />
                <label htmlFor="">Product Name :</label>
                <input type="text" onChange={evt => this.setState({ newProductName: evt.target.value })} />
                <input type="button" value="Add New" onClick={this.onAddNewClick} />
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