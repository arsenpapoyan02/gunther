import React from "react";
import './wasserhahn.scss';
import HeaderContainer from '../Header/HeaderContainer';
import Footer from "../Footer/Footer";
import Product from "./Product";

class Wasserhahn extends React.Component {

    async componentDidMount() {
        const currentPageFromStorage = parseFloat(localStorage.getItem('currentPage'));
        await this.props.setCurrentPage(currentPageFromStorage);
        let products = [];
        const currentPage = this.props.currentPage;
        const pageSize = this.props.pageSize; 
        const dataProductsLength = this.props.data.products.length;
        const forLength = pageSize > dataProductsLength ? dataProductsLength : pageSize * currentPage;
        for(let i = currentPage === 1 ? 0 : (currentPage - 1) * pageSize; i < forLength; i++) {
            if(i >= dataProductsLength) {
                break
            }
            else {
                products.push(this.props.data.products[i])
            }
        }
        await this.props.setProducts(products);
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const onPageChanged = async (p) => {
            await this.props.setCurrentPage(p);
            localStorage.setItem('currentPage', p);
            const currentPage = this.props.currentPage;
            const pageSize = this.props.pageSize; 
            const dataProductsLength = this.props.data.products.length;
            let products = [];
            for(let i = currentPage === 1 ? 0 : (currentPage - 1) * pageSize; i < (pageSize * currentPage); i++){
                if(i >= dataProductsLength) {
                    break
                }
                else {
                    products.push(this.props.data.products[i])
                }
            }
            this.props.setProducts(products);
        }

        return (
            <div className="category">
                <HeaderContainer />
                <div className="container">
                    <div className="category__inner">
                        <h1 className="category__inner--title">Wasserhahn</h1>
                        <div className="category__inner--items">
                            {
                                this.props.products.map(key => {
                                    return <Product key={key.name} 
                                                    details={key}
                                                    openProduct={this.props.openProduct}/>
                                })
                            }
                        </div>
                        <div className="category__pagesCount">
                            {
                            pages.map(p => {
                                return <span className={`category__pagesCount--num ${this.props.currentPage === p && 'selected'}`} key={p} onClick={() => onPageChanged(p)}>{p}</span>
                            }) 
                            }  
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Wasserhahn;