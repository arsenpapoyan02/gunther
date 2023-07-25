import { connect } from "react-redux";
import Categories from "./Categories";
import { defaultCurrentPage } from "../../Redux/categoriesReducer";
import { switchHeaderStyle, showBurgerMenu } from "../../Redux/headerReducer";
import { switchNotification } from "../../Redux/cookiesReducer";

const mapStateToProps = (state) => ({
    notificationText: state.cookies.notificationTextNotFoundCategory
})

const CategoriesContainer = connect(mapStateToProps, {defaultCurrentPage, switchHeaderStyle, showBurgerMenu, switchNotification})(Categories);

export default CategoriesContainer;