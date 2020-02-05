import React from 'react';

const NewProduct = ({ addNew, categories }) => {
    const [newProductName, setNewProductName] = React.useState('');
    const categoryItems = categories.map(category => (
        <option value={category} key={category}>{category}</option>)
    );
    const [category, setCategory] = React.useState('');
    return (
        <>
            <label htmlFor="">Product Name :</label>
            <input type="text" onChange={evt => setNewProductName(evt.target.value)} />
            <select onChange={(evt) => setCategory(evt.target.value)}>
                {categoryItems}
            </select>
            <input type="button" value="Add New" onClick={() => addNew(newProductName, category)} />
        </>
    );
}

export default NewProduct;