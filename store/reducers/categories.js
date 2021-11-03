import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  SET_CATEGORIES,
} from "../actions/categories";
import Category from "../../models/categories";
//import CATEGORIES from "../../data/Categories";
//import AsyncStorage from "@react-native-async-storage/async-storage";

const intialState = {
  avaialableCategories: [], //CATEGORIES,
  //userCategories: [],
};

export default (state = intialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        avaialableCategories: action.categories,
        userCategories: action.userCategories,
      };
    case CREATE_CATEGORY:
      const newCategory = new Category(
        action.categoryData.id,
        action.categoryData.dateCat,
        action.categoryData.category,
        action.categoryData.intialAmount,
        action.categoryData.items,
        action.categoryData.amount,
        action.categoryData.balance,
        action.categoryData.totalAmount
      );
      // const saveCategory = async () => {
      //   const value = await AsyncStorage.getItem(CATEGORIES);
      //   const n = value ? JSON.parse(value) : [];
      //   n.push(newCategory);
      //   await AsyncStorage.setItem(CATEGORIES, JSON.stringify(n));
      // };
      return {
        ...state,
        avaialableCategories: state.avaialableCategories.concat(newCategory),
        //userCategories: state.userCategories.concat(newCategory),
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        userCategories: state.userCategories.filter(
          (category) => category.id !== action.cid
        ),
        avaialableCategories: state.avaialableCategories.filter(
          (category) => category.id !== action.cid
        ),
      };
  }
  return state;
};
