import { connect } from "react-redux";
import Duschabflusse from "./Duschabflusse";
import { setCurrentPage, setProducts, openProduct } from "../../Redux/categoriesReducer";

const mapStateToProps = (state) => ({
    data: state.categories.categories.duschabflusse,
    pageSize: state.categories.pageSize,
    totalCount: state.categories.categories.duschabflusse.products.length,
    currentPage: state.categories.currentPage,
    products: state.categories.products
})

const DuschabflusseContainer = connect(mapStateToProps, {setCurrentPage,setProducts,openProduct})(Duschabflusse)

export default DuschabflusseContainer;