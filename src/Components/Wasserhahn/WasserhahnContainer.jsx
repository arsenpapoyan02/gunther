import { connect } from "react-redux";
import Wasserhahn from "./Wasserhahn";
import { setCurrentPage, setProducts, openProduct } from "../../Redux/categoriesReducer";

const mapStateToProps = (state) => ({
    data: state.categories.categories.wasserhahn,
    pageSize: state.categories.pageSize,
    totalCount: state.categories.categories.wasserhahn.products.length,
    currentPage: state.categories.currentPage,
    products: state.categories.products
})

const WasserhahnContainer = connect(mapStateToProps, {setCurrentPage,setProducts,openProduct})(Wasserhahn);

export default WasserhahnContainer;