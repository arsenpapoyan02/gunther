import { connect } from "react-redux";
import Bidets from "./Bidets";
import { setCurrentPage, setProducts, openProduct } from "../../Redux/categoriesReducer";

const mapStateToProps = (state) => ({
    data: state.categories.categories.bidets,
    pageSize: state.categories.pageSize,
    totalCount: state.categories.categories.bidets.products.length,
    currentPage: state.categories.currentPage,
    products: state.categories.products
})

const BidetsContainer = connect(mapStateToProps, {setCurrentPage,setProducts,openProduct})(Bidets)

export default BidetsContainer;