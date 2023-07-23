import { combineReducers, createStore } from "redux";
import categoriesReducer from "./categoriesReducer";
import newProductsReducer from "./newProductsReducer";
import headerReducer from "./headerReducer";
import sliderReducer from "./sliderReducer";
import cookiesReducer from "./cookiesReducer";

let reducers = combineReducers({
    header: headerReducer,
    categories: categoriesReducer,
    newProducts: newProductsReducer,
    slider: sliderReducer ,
    cookies: cookiesReducer
});

let store = createStore(reducers);

export default store;