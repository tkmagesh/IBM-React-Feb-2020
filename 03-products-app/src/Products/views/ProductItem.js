import React from 'react';

const ProductItem = ({ product, markOutOfStock }) => (
    <li>
        {product.isOutOfStock ? (<div className="outOfStock">{product.name}</div>) : (<div>{product.name}</div>)}
        <button onClick={() => markOutOfStock(product)}>
            Mark Out of Stock
        </button>
        <button>Remove</button>
        <div> [ {product.category} ] </div>
    </li>
)

export default ProductItem;