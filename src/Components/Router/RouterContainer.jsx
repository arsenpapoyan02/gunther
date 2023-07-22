import { connect } from "react-redux";
import Router from "./Router";
import { openProduct } from "../../Redux/categoriesReducer";

const mapStateToProps = (state) => ({
    productURL: state.categories.productURL
})

const RouterContainer = connect(mapStateToProps, {openProduct})(Router);

export default RouterContainer;