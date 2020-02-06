import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

export function booksReducer(currentState = [], action){
    if (action.type === 'LOAD'){
        return action.payload;
    }
    if (action.type === 'NEW_BOOK'){
        return [...currentState, action.payload];
    }
    return currentState;
}

const bookActionCreators = {
    load(){
        return (dispatch) => {
            axios
                .get('http://localhost:3030/books')
                .then(response => response.data)
                .then(books => {
                    const loadAction = { type : 'LOAD', payload : books};
                    dispatch(loadAction);
                })
        }
    },
    addNew(newBookData){
        return (dispatch) => {
            axios
                .post('http://localhost:3030/books', newBookData)
                .then(response => response.data)
                .then(newBook => {
                    const newBookAction = { type : 'NEW_BOOK', payload : newBook};
                    dispatch(newBookAction);
                })
        }
    }
}

const Books = ({books, load, addNew}) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('');
    const bookItems = books.map(book => (
        <tr key={book.id}>
            <td>{book.name}</td>
            <td>{book.desc}</td>
            <td>{book.author}</td>
        </tr>
    ))
    useEffect(_ => load(), []);
    return(
        <>
            <h3>Books</h3>
            <hr/>
            <div>
                <input type="text" onChange={evt => setName(evt.target.value)}/>
                <input type="text" onChange={evt => setDesc(evt.target.value)}/>
                <input type="text" onChange={evt => setAuthor(evt.target.value)}/>
                <input type="button" value="Add New" 
                    onClick={ () => addNew({name, desc, author})}
                />
            </div>
            <div>
                <table>
                    <tbody>
                        {bookItems}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default connect(
    books => ({books}),
    dispatch => bindActionCreators(bookActionCreators, dispatch)
)(Books);