const FIXED_HEADER = 'FIXED-HEADER'; 
const SHOW_BURGER_MENU = 'SHOW-BURGER-MENU';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SHOW_SEARCH_ERROR = 'SHOW-SEARCH-ERROR';
const SET_FOUND_PRODUCT = 'SET-FOUND-PRODUCT'; 

const initialState = {
    headerStyle: false,
    burgerMenu: false,
    searchText: '',
    searchNotFound: null,
    foundProduct: null
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIXED_HEADER:
            return {
                ...state,
                headerStyle: action.bool
            }
        case SHOW_BURGER_MENU:
            return {
                ...state,
                burgerMenu: action.bool != undefined ? action.bool : !state.burgerMenu
            }
        case CHANGE_NEW_TEXT:
            return {
                ...state,
                searchText: action.text
            }
        case SHOW_SEARCH_ERROR: 
            return {
                ...state,
                searchNotFound: action.bool
            }
        case SET_FOUND_PRODUCT:
            return {
                ...state,
                foundProduct: action.product
            }
        default:
            return state;
    }
} 

export const switchHeaderStyle = (bool) => ({type: FIXED_HEADER, bool});
export const showBurgerMenu = (bool) => ({type: SHOW_BURGER_MENU, bool});
export const changeNewText = (text) => ({type: CHANGE_NEW_TEXT, text});
export const showSearchError = (bool) => ({type: SHOW_SEARCH_ERROR, bool});
export const setFoundProduct = (product) => ({type: SET_FOUND_PRODUCT, product});

export default headerReducer;
