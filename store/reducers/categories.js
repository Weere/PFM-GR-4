import { CREATE_CATEGORY } from "../actions/categories";
import Category from "../../models/categories";
import CATEGORIES from "../../data/Categories";
import AsyncStorage from '@react-native-async-storage/async-storage';


const intialState = {
    avaialableCategories : CATEGORIES,
};

export default (state = intialState, action) => {
    switch (action.type){
        case CREATE_CATEGORY: 
            const newCategory = new Category(
                action.categoryData.id,
                action.categoryData.category, 
                action.categoryData.intialAmount,
                action.categoryData.items,
                action.categoryData.amount,
                action.categoryData.balance,
                action.categoryData.totalAmount
            );
            const saveCategory = async () => {
                const value = await AsyncStorage.getItem(CATEGORIES)
                const n = value ? JSON.parse(value) : []
                n.push(newCategory)
                await AsyncStorage.setItem(CATEGORIES, JSON.stringify(n))
                
            }
            return {
                ...state,
                avaialableCategories:state.avaialableCategories.concat(newCategory)
            }
    }
    return state;
};