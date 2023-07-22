import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
    render() {

        const openItemInfo = () => {
            const productURL = {
                category: this.props.details.category,
                name: this.props.details.name
            }
            const productInfo = this.props.details;
            this.props.openProduct(productURL, productInfo);
            localStorage.setItem('productCategory', productURL.category);
            localStorage.setItem('productName', productURL.name);
            localStorage.setItem('productImgURL', this.props.details.imgURL);
            localStorage.setItem('productPrice', this.props.details.price);
            localStorage.setItem('productDescription', this.props.details.description);
            if(this.props.details.colors) {
                localStorage.setItem('productColors', JSON.stringify(this.props.foundProduct.colors));
            }
            else {
                localStorage.removeItem('productColors');
            }
        }

        return(
            <Link to={`${this.props.details.category}/${this.props.details.name}`} className="newProducts__inner--item" onClick={openItemInfo}><div>
                <div className="newProducts__inner--item--image">
                    <img src={this.props.details.imgURL}></img>
                </div>
                <div className="newProducts__inner--item--description">
                    <div className="newProducts__item--description--name">{this.props.details.name}</div>
                    <div className="newProducts__item--description--price">€ {this.props.details.price}</div>
                </div>
            </div></Link>
        ) 
    }
}

export default Product;