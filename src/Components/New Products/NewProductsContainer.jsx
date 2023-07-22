import { connect } from "react-redux";
import NewProducts from "./NewProducts";
import { setProducts } from "../../Redux/newProductsReducer";
import { openProduct } from "../../Redux/categoriesReducer";

const mapStateProps = (state) => ({
    data: state.categories.categories,
    products: state.newProducts.products
})

const NewProductsContainer = connect(mapStateProps, {setProducts,openProduct})(NewProducts)

export default NewProductsContainer;