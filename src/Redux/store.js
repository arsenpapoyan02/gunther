import { combineReducers, createStore } from "redux";
import categoriesReducer from "./categoriesReducer";
import newProductsReducer from "./newProductsReducer";
import headerReducer from "./headerReducer";
import sliderReducer from "./sliderReducer";

let reducers = combineReducers({
    header: headerReducer,
    categories: categoriesReducer,
    newProducts: newProductsReducer,
    slider: sliderReducer 
});

let store = createStore(reducers);
window.store = store;

export default store;