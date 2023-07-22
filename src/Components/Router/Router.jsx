import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App/App";
import WasserhahnContainer from "../Wasserhahn/WasserhahnContainer";
import BadAccessoireContainer from "../BadAccessoire/BadAccessoireContainer";
import DuschabflusseContainer from "../Duschabflusse/DuschabflusseContainer";
import BidetsContainer from "../Bidets/BidetsContainer";
import DuschenContainer from "../Duschen/DuschenContainer";
import ErsatzteileContainer from "../Ersatzteile/ErsatzteileContainer";
import ProductInfoContainer from "../ProductInfo/ProductInfoContainer";
import NotFound from "../NotFound/NotFound";

class Router extends React.Component {

    componentDidMount() {
        const productCategory = localStorage.getItem('productCategory');
        const productName = localStorage.getItem('productName');
        const productURL = {
            category: productCategory,
            name: productName
        }

        const productImgURL = localStorage.getItem('productImgURL');
        const productPrice = localStorage.getItem('productPrice');
        const productDescription = localStorage.getItem('productDescription');
        const productColors =JSON.parse(localStorage.getItem('productColors'));
        const productInfo = {
            category: productCategory,
            name: productName,
            imgURL: productImgURL,
            price: productPrice,
            description: productDescription,
            colors: productColors
        }
        this.props.openProduct(productURL, productInfo)
        console.clear();
    } 

    render() {

        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/categories/wasserhahn" element={<WasserhahnContainer/>}/>
                    <Route path="/categories/zubehor" element={<BadAccessoireContainer/>}/>
                    <Route path="/categories/duschabflusse" element={<DuschabflusseContainer/>}/>
                    <Route path="/categories/bidets" element={<BidetsContainer/>}/>
                    <Route path="/categories/duschen" element={<DuschenContainer/>}/>
                    <Route path="/categories/ersatzteile" element={<ErsatzteileContainer/>}/>
                    <Route path="/categories/waschbecken" element={<NotFound/>}/>
                    <Route path={`/${this.props.productURL.category}/${this.props.productURL.name}`} element={<ProductInfoContainer/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;