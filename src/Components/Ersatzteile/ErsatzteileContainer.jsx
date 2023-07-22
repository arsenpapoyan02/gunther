import { connect } from "react-redux";
import Ersatzteile from "./Ersatzteile";
import { setCurrentPage, setProducts, openProduct } from "../../Redux/categoriesReducer";

const mapStateToProps = (state) => ({
    data: state.categories.categories.ersatzteile,
    pageSize: state.categories.pageSize,
    totalCount: state.categories.categories.ersatzteile.products.length,
    currentPage: state.categories.currentPage,
    products: state.categories.products
})

const ErsatzteileContainer = connect(mapStateToProps, {setCurrentPage,setProducts,openProduct})(Ersatzteile)

export default ErsatzteileContainer;