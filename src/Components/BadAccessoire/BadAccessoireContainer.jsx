import { connect } from "react-redux";
import BadAccessoire from "./BadAccessoire";
import { setCurrentPage, setProducts, openProduct } from "../../Redux/categoriesReducer";

const mapStateToProps = (state) => ({
    data: state.categories.categories.zubehor,
    pageSize: state.categories.pageSize,
    totalCount: state.categories.categories.zubehor.products.length,
    currentPage: state.categories.currentPage,
    products: state.categories.products
})

const BadAccessoireContainer = connect(mapStateToProps, {setCurrentPage,setProducts,openProduct})(BadAccessoire)

export default BadAccessoireContainer;