import React from "react";
import './products.scss';
import Product from "./Product";

class NewProducts extends React.Component {

    componentDidMount() {
        const products = [];
        const categories = [];
        Object.values(this.props.data).map(key => categories.push(key));
        for(let i = 0; i < categories.length ; i++) {
            products.push(categories[i].products[Math.floor(Math.random() * categories[i].products.length)])
        }
        this.props.setProducts(products);
    }

    render() {
        return (
            <section className="newProducts">
                <div className="container">
                    <h1 className="section__title">Neue Produkte</h1>
                    <div className="newProducts__inner">
                        {
                            this.props.products.map(key => {
                                return <Product details={key} 
                                                key={key.name}
                                                openProduct={this.props.openProduct}/>
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default NewProducts;