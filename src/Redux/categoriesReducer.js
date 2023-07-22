import data from './data';

const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PRODUCTS = 'SET-PRODUCTS';
const DEFAULT_CURRENT_PAGE = 'DEFAULT-CURRENT-PAGE';
const OPEN_PRODUCT = 'OPEN-PRODUCT'; 
const GET_PRODUCTS_BY_CATEGORY = 'GET-PRODUCTS-BY-CATEGORY';
const SET_PRODUCTS_BY_CATEGORY = 'SET-PRODUCTS-BY-CATEGORY';
const CHANGE_PRODUCT_COLOR = 'CHANGE-PRODUCT-COLOR';

const initialState = {
    categories: data.categories,
    pageSize: 8,
    currentPage: 1,
    products: [],
    
    productURL: {},
    productInfo: {},
    similarProducts: []
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
            case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case DEFAULT_CURRENT_PAGE:
            return {
                ...state,
                currentPage: 1
            }
        case OPEN_PRODUCT:
            return {
                ...state,
                productURL: action.productURL,
                productInfo: action.productInfo
            }
        case GET_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                products: action.category
            }
        case SET_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                similarProducts: action.products
            }
        case CHANGE_PRODUCT_COLOR:
            return {
                ...state,
                productInfo: {...state.productInfo, imgURL: action.imgURL}
            }
        default:
            return state;
    }
}

export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setProducts = (products) => ({type: SET_PRODUCTS, products});
export const defaultCurrentPage = () => ({type: DEFAULT_CURRENT_PAGE});
export const openProduct = (productURL, productInfo) => ({type: OPEN_PRODUCT, productURL, productInfo});
export const getProductsByCategory = (category) => ({type: GET_PRODUCTS_BY_CATEGORY, category});
export const setProductsByCategory = (products) => ({type: SET_PRODUCTS_BY_CATEGORY, products});
export const changeProductColor = (imgURL) => ({type: CHANGE_PRODUCT_COLOR, imgURL});

export default categoriesReducer;