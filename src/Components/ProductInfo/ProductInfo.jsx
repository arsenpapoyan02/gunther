import React from "react";
import './productInfo.scss';
import HeaderContainer from '../Header/HeaderContainer';
import Footer from '../Footer/Footer';

class ProductInfo extends React.Component {

    async componentDidMount() {
        this.props.setFoundProduct(null);
        let products = [];
        Object.keys(this.props.data).map(key => {
            if(key === this.props.details.category) {
                products = this.props.data[key].products
            }
        })
        await this.props.getProductsByCategory(products);
        
        let products2 = [];
        let loopStart = this.props.products.length > 8 ? Math.floor(Math.random()*this.props.products.length) - 9 : 0;
        let loopEnd = loopStart + 8 > this.props.products.length ? this.props.products.length : loopStart + 8;
        for(let i = loopStart; i < loopEnd; i++) {
            products2.push(this.props.products[i])
        }
        this.props.setProductsByCategory(products2);
    }

    render() {

        const changeProductColor = (color) => {
            let productColor = color.toUpperCase();
            let currentImgURL = this.props.details.imgURL;
            let indexOfDot = currentImgURL.indexOf('.jpg');
            let indexOfSpace = currentImgURL.includes(' ') ? currentImgURL.indexOf(' ') : null;
            let newColor = '';
            if(indexOfSpace === null) {
                newColor = currentImgURL.replace(currentImgURL[indexOfDot - 1], `${currentImgURL[indexOfDot - 1] + ' ' + productColor}`);
            }
            else {
                newColor = currentImgURL.slice(0, indexOfSpace);
                newColor += ' ' + productColor + '.jpg';
            }
            this.props.changeProductColor(newColor);
        }

        return (
            <div className="productInfo">
                <HeaderContainer />
                <div className="container">
                    <div className="productInfo__wrapper">
                        <div className="productInfo__inner">
                            <div className={`productInfo__inner--left ${!this.props.details.colors ? 'mt0' : null}`}>
                                <h2 className="productInfo__left--name">Günther {this.props.details.name}</h2>
                                <p className="productInfo__left--description">{this.props.details.description}</p>
                                <h3 className="productInfo__left--price">€ {this.props.details.price}</h3>
                                {
                                    this.props.details.colors ?
                                    <div className="intro__slider--colors">
                                        {
                                            this.props.details.colors.map(key => {
                                                return <div className="productColor" key={key} onClick={() => changeProductColor(key)}>
                                                    <div className="productColor__color" style={{backgroundColor: key}}></div>
                                                    <p className="productColor__text">{key}</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="productInfo__inner--right">
                                <div className="productInfo__right--image">
                                    <img src={this.props.details.imgURL} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="similarProducts">
                            <h1 className="category__inner--title">Similar Products</h1>
                            <div className="similarProducts__inner">
                                {
                                    this.props.similarProducts.map(key => {
                                        return <Product details={key}
                                                        key={key.name}
                                                        openProduct={this.props.openProduct}/>
                                    })
                                }
                            </div>
                        </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProductInfo;