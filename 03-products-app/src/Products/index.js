import React from 'react';
import './index.css';

export class Products extends React.Component {
    state = {
        newProductName: '',

    };
    onAddNewClick = () => {
        const { newProductName } = this.state;
        this.props.addNew(newProductName);
    }
    render = () => {
        const { data: products, markOutOfStock } = this.props;
        const productItems = products.map((product, index) => (
            <li key={index}>
                <div>{JSON.stringify(product)}</div>
                <button onClick={() => markOutOfStock(product)}> 
                    Mark Out of Stock 
                </button>
            </li>
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
            </>
        )
    }
}

export class ProductsCount extends React.Component {
    render = () => {
        return (
            <div>
                <span>Count : </span>
                <span>{this.props.data}</span>
            </div>
        )
    }
}