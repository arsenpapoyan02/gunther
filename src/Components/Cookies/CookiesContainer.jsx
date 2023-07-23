import { connect } from "react-redux";
import Cookies from "./Cookies";
import { closeCookies } from "../../Redux/cookiesReducer";

const mapStateToProps = (state) => ({
    cookies: state.cookies.cookies
})

const CookiesContainer = connect(mapStateToProps, {closeCookies})(Cookies);

export default CookiesContainer;