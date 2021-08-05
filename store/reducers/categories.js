import { CREATE_CATEGORY } from "../actions/categories";
import Category from "../../models/categories";
import CATEGORIES from "../../data/Categories";

const intialState = {
    avaialableCategories : CATEGORIES,
};

export default (state = intialState, action) => {
    switch (action.type){
        case CREATE_CATEGORY: 
            const newCategory = new Category(
                new Date().toString(),
                action.categoryData.category, 
                action.categoryData.intialAmount,
                action.categoryData.items,
                action.categoryData.amount,
                action.categoryData.balance
            );
            return {
                ...state,
                avaialableCategories:state.avaialableCategories.concat(newCategory)
            }
    }
    return state;
};