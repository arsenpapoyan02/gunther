import { connect } from "react-redux";
import ProductInfo from "./ProductInfo";
import { getProductsByCategory, openProduct, setProductsByCategory, changeProductColor } from "../../Redux/categoriesReducer";
import { setFoundProduct } from "../../Redux/headerReducer";

const mapStateToProps = (state) => ({
    details: state.categories.productInfo,
    products: state.categories.products,
    data: state.categories.categories,
    similarProducts: state.categories.similarProducts
})

const ProductInfoContainer = connect(mapStateToProps, {getProductsByCategory, openProduct, setProductsByCategory,
                                                        setFoundProduct, changeProductColor})(ProductInfo);

export default ProductInfoContainer;