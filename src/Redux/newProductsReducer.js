const SET_NEW_PRODUCTS = 'SET-NEW-PRODUCTS';

const initialState = {
    products: []
}

const newProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}

export const setProducts = (products) => ({type: SET_NEW_PRODUCTS, products});

export default newProductsReducer;