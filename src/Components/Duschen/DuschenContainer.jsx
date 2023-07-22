import { connect } from "react-redux";
import Duschen from "./Duschen";
import { setCurrentPage, setProducts, openProduct } from "../../Redux/categoriesReducer";

const mapStateToProps = (state) => ({
    data: state.categories.categories.duschen,
    pageSize: state.categories.pageSize,
    totalCount: state.categories.categories.duschen.products.length,
    currentPage: state.categories.currentPage,
    products: state.categories.products
})

const DuschenContainer = connect(mapStateToProps, {setCurrentPage,setProducts, openProduct})(Duschen)

export default DuschenContainer;