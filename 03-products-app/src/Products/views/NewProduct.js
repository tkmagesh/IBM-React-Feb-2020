import React from 'react';

const NewProduct = ({ addNew }) => {
    const [newProductName, setNewProductName] = React.useState('');
    return (
        <>
            <label htmlFor="">Product Name :</label>
            <input type="text" onChange={evt => setNewProductName(evt.target.value)} />
            <input type="button" value="Add New" onClick={() => addNew(newProductName)} />
        </>
    );
}

export default NewProduct;