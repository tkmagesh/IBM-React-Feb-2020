import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export function categoriesReducer(currentState = [], action){
    if (action.type === 'ADD_NEW_CATEGORY'){
        return [...currentState, action.payload];
    }
    return currentState;
}

export let categoryActionCreators = {
    addNew(categoryName){
        const action = { type :'ADD_NEW_CATEGORY', payload : categoryName};
        return action;
    }
}

class Categories extends React.Component{
    render = () => {
        const { data : categories, addNew } = this.props;
        const categoryItems = categories.map((category, index) => (
            <span key={index}> [ {category} ] </span>
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
    const categories = storeState.categoriesState;
    return { data : categories };
}

function mapDispatchToProps(dispatch){
    var categoryActionDispatchers = bindActionCreators(categoryActionCreators, dispatch);
    return categoryActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);