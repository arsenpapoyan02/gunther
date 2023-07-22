import { connect } from "react-redux";
import Header from "./Header";
import { switchHeaderStyle, showBurgerMenu, changeNewText, showSearchError, setFoundProduct } from "../../Redux/headerReducer";
import { openProduct } from "../../Redux/categoriesReducer";

const mapStateToProps = (state) => ({
    data: state.categories.categories,
    headerStyle: state.header.headerStyle,
    burgerMenu: state.header.burgerMenu,
    searchText: state.header.searchText,
    searchNotFound: state.header.searchNotFound,
    foundProduct: state.header.foundProduct
})

const HeaderContainer = connect(mapStateToProps, {switchHeaderStyle, showBurgerMenu, changeNewText,
                                                showSearchError, setFoundProduct, openProduct})(Header);

export default HeaderContainer;