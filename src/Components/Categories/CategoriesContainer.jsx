import { connect } from "react-redux";
import Categories from "./Categories";
import { defaultCurrentPage } from "../../Redux/categoriesReducer";
import { switchHeaderStyle, showBurgerMenu } from "../../Redux/headerReducer";

const CategoriesContainer = connect(null, {defaultCurrentPage, switchHeaderStyle, showBurgerMenu})(Categories);

export default CategoriesContainer;