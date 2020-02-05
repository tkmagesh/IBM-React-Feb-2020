import React from 'react';

export class Products extends React.Component {
    state = {
        newProductName: '',

    };
    onAddNewClick = () => {
        const { newProductName } = this.state;
        this.props.addNew(newProductName);
    }
    render = () => {
        const { data: productNames } = this.props;
        const productItems = productNames.map((productName, index) => (
            <li key={index}>
                {productName}
            </li>
        ));
        return (
            <>
                <h1>Products</h1>
                <hr />
                <label htmlFor="">Product Name :</label>
                <input type="text" onChange={evt => this.setState({ newProductName: evt.target.value })} />
                <input type="button" value="Add New" onClick={this.onAddNewClick} />
                <ol>
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