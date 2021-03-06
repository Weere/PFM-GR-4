import Category from "../../models/categories";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const deleteCategory = (categoryId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://managemyfinance-1e046-default-rtdb.firebaseio.com/categories/${userId}/${categoryId}.json`,
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
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    try {
      const response = await fetch(
        `https://managemyfinance-1e046-default-rtdb.firebaseio.com/categories/${userId}.json`
      );
      //?auth=${token}

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

      dispatch({
        type: SET_CATEGORIES,
        categories: loadedCategories,
        //userCategories: loadedCategories,
        // userCategories: loadedCategories.filter(
        //   (cat) => cat.ownerId === userId
        // ),
      });
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
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    console.log(userId);
    const response = await fetch(
      `https://managemyfinance-1e046-default-rtdb.firebaseio.com/categories/${userId}.json`,
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

    if (!response.ok) {
      console.log(response);
      let message = "something went wrong";
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
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
