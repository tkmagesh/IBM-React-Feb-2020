import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    }
}

class Categories extends React.Component{
    
    render = () => {
        const { data : categories, addNew, setSelected, selectedCategory } = this.props;
        const categoryItems = categories.map((category, index) => (
            <span key={index} onClick={() => setSelected(category)} className={category === selectedCategory ? 'highlight' : ''}  > [ {category} ] </span>
        ));
        return(
            <React.Fragment>
                <h3>Categories</h3>
                <hr/>
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