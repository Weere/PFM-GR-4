import Category from "../../models/categories";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const deleteCategory = (categoryId) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://managemyfinance-1e046-default-rtdb.firebaseio.com/categories/${categoryId}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    dispatch({ type: DELETE_CATEGORY, cid: categoryId });
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://managemyfinance-1e046-default-rtdb.firebaseio.com/categories.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedCategories = [];

      for (const key in resData) {
        loadedCategories.push(
          new Category(
            key,
            resData[key].dateCat,
            resData[key].category,
            resData[key].intialAmount,
            resData[key].items,
            resData[key].amount,
            resData[key].balance,
            resData[key].totalAmount
          )
        );
      }

      dispatch({ type: SET_CATEGORIES, categories: loadedCategories });
    } catch (err) {
      // send to cstom analystics server
      throw err;
    }
  };
};

export const createCategory = (
  dateCat,
  category,
  intialAmount,
  items,
  amount,
  balance,
  totalAmount
) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://managemyfinance-1e046-default-rtdb.firebaseio.com/categories.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dateCat,
          category,
          intialAmount,
          items,
          amount,
          balance,
          totalAmount,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_CATEGORY,
      categoryData: {
        id: resData.name,
        dateCat,
        category,
        intialAmount,
        items,
        amount,
        balance,
        totalAmount,
      },
    });
  };
};
