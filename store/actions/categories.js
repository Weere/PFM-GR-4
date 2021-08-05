export const CREATE_CATEGORY = 'CREATE_CATEGORY';
//export const DELETE_CATEGORY = 'DELETE_CATEGORY';

// export const deleteProduct = productId => {
//     return { type: DELETE_PRODUCT, pid: productId };
//   };

export const createCategory = (category, intialAmount, items, amount, balance) => {
    return{
        type: CREATE_CATEGORY,
        categoryData: {
            category, intialAmount, items, amount, balance
        }
    };
};