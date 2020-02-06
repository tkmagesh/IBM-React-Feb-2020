
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

const defaultCategoryState = {
    selectedCategory : '',
    categories : []
};

export function categoriesReducer(currentState = defaultCategoryState, action){
    if (action.type === 'ADD_NEW_CATEGORY'){
        return { ...currentState, categories : [ ...currentState.categories, action.payload]}
    }
    if (action.type === 'SET_SELECTED_CATEGORY'){
        return { ...currentState, selectedCategory : action.payload };
    }
    if (action.type === 'LOAD_CATEGORIES'){
        return { ...currentState, categories : action.payload};
    }
    return currentState;
}

export let categoryActionCreators = {
    addNew(categoryName){
        const action = { type :'ADD_NEW_CATEGORY', payload : categoryName};
        return action;
    },
    setSelected(categoryName){
        const action = { type : 'SET_SELECTED_CATEGORY', payload : categoryName};
        return action;
    },
    load(){
        return function(dispatch){
            axios
                .get('http://localhost:3030/categories')
                .then(response => response.data)
                .then(categories => {
                    const action = { type : 'LOAD_CATEGORIES', payload :categories};
                    dispatch(action);
                })
        }
    }
}

class Categories extends React.Component{
    
    render = () => {
        const { data : categories, addNew, setSelected, selectedCategory, load } = this.props;
        const categoryItems = categories.map((category, index) => (
            <span key={'cat-' + category.id} onClick={() => setSelected(category)} className={category === selectedCategory ? 'highlight' : ''}  > [ {category.name} ] </span>
        ));
        return(
            <React.Fragment>
                <h3>Categories</h3>
                <hr/>
                <input type="button" value="Load Categories" onClick={() => load()} />
                <br/>
                <label>Category Name :</label>
                <input type="text" onChange={ evt => this.setState({newCategoryName : evt.target.value})}/>
                <input type="button" value="Add New" onClick={ () => addNew(this.state.newCategoryName) }/>
                <div>{categoryItems}</div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(storeState){
    
    const categories = storeState.categoriesState.categories;
    console.log(categories);
    return { data: categories, selectedCategory: storeState.categoriesState.selectedCategory };
}

function mapDispatchToProps(dispatch){
    var categoryActionDispatchers = bindActionCreators(categoryActionCreators, dispatch);
    return categoryActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);