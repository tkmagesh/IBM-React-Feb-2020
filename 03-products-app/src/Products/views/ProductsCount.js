import React from 'react';

class ProductsCount extends React.Component {
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

export default ProductsCount;