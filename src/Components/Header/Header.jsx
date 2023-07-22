import React from "react";
import './header.scss';
import logo from './logo.png';
import search from './search.png';
import home from './home.png';
import categories from './categories.png';
import order from './order.png';
import about from './info-button.png';
import { Link } from "react-router-dom";

class Header extends React.Component {

    componentDidMount() {
        if(window.location.pathname === '/') {
            let introH = document.querySelector('.intro').clientHeight;
            let scrollOffset = window.pageYOffset;
            if(scrollOffset > introH) {
                this.props.switchHeaderStyle(true)
            }
            else {
                this.props.switchHeaderStyle(false)
            }
        }
        console.clear();
    }

    render(){
        const scrollToSection = (section) => {
            if(window.location.pathname === '/') {
                const sectionOffsetTop = section.offsetTop;
                window.scrollTo({
                    top: sectionOffsetTop,
                    behavior: "smooth"
                })
            }
            else {
                window.location.pathname = '/';
            }
            this.props.showBurgerMenu(false);
            document.body.classList = ''
        }

        window.addEventListener('scroll',  () => {
            if(window.location.pathname === '/') {
                let intro = document.querySelector('.intro');
                let introH = intro === null ? 0 : intro.clientHeight;
                let scrollOffset = window.pageYOffset;
                if(scrollOffset > introH) {
                    this.props.switchHeaderStyle(true)
                }
                else {
                    this.props.switchHeaderStyle(false)
                }
            }
        })

        const showBurgerMenu = async () => {
            await this.props.showBurgerMenu();
            if(this.props.burgerMenu) {
                document.body.classList += 'no-scroll'

            }
            else {
                document.body.classList = ''
            }
        }

        const changeNewText = async (e) => {
            let text = e.target.value;
            await this.props.changeNewText(text);
            await searchProduct();

            if(this.props.searchNotFound) {
                this.props.setFoundProduct(null);
            }
        }

        const searchProduct = async () => {
            const productName = this.props.searchText.toUpperCase();
            let errorTrue = null;
            let errorFalse = null;
            Object.values(this.props.data).map(key => {
                if(productName != null && productName != '') {
                    key.products.map(async product => {
                        if(product.name === productName) {
                            errorFalse = false;
                            await this.props.setFoundProduct(product);
                        }
                        if(product.name !== productName) {
                            errorTrue = true;
                        }
                    })
                }
            })
            if(errorTrue) {
                await this.props.showSearchError(true);
            }
            if(!errorFalse && errorFalse != null) {
                this.props.showSearchError(false);
            }
        }

        const openItemInfo = () => {
            const productURL = {
                category: this.props.foundProduct.category,
                name: this.props.foundProduct.name
            }
            const productInfo = this.props.foundProduct;
            this.props.openProduct(productURL, productInfo);
            localStorage.setItem('productCategory', productURL.category);
            localStorage.setItem('productName', productURL.name);
            localStorage.setItem('productImgURL', this.props.foundProduct.imgURL);
            localStorage.setItem('productPrice', this.props.foundProduct.price);
            localStorage.setItem('productDescription', this.props.foundProduct.description);
            if(this.props.foundProduct.colors) {
                localStorage.setItem('productColors', JSON.stringify(this.props.foundProduct.colors));
            }
            else {
                localStorage.removeItem('productColors');
            }
            this.props.changeNewText('');
            this.props.showBurgerMenu(false);
        }

        const searchProductByEnter = (e) => {
            if(e.key === 'Enter' && this.props.foundProduct !== null) {
                openItemInfo();
                document.querySelector('.search__img').click();
            }
        }

        return (
            <header className={`header ${this.props.headerStyle ? 'fixed' : null}`}>
                <div className="container">
                    <div className="header__inner">     
                        <a href="/"><img src={logo} className="logo" alt="" /></a>
                        <nav className="nav">
                            <li className="nav__link" onClick={() => scrollToSection(document.querySelector('.intro'))}>Heim</li>
                            <li className="nav__link" onClick={() => scrollToSection(document.querySelector('.categories'))}>Kategorien</li>
                            <li className="nav__link" onClick={() => scrollToSection(document.querySelector('.newProducts'))}>Neue Produkte</li>
                            <li className="nav__link" onClick={() => scrollToSection(document.querySelector('.about'))}>Über uns</li>
                        </nav>
                        <div className={`header__search ${this.props.searchNotFound ? 'notFound' : null}`} >
                            <input type="text" className="header__search--input" placeholder="Suche" value={this.props.searchText} onChange={e => changeNewText(e)} onKeyDown={e => searchProductByEnter(e)}/>
                            <label>Not Found</label>
                            <Link to={this.props.foundProduct !== null ? `/${this.props.foundProduct.category}/${this.props.foundProduct.name}` : null} className={`search__img ${this.props.foundProduct === null ? 'disabled' : null}`}><img src={search} alt="" width={18} className="header__search--img" onClick={openItemInfo}/></Link>
                        </div>
                        <button className="burger" onClick={showBurgerMenu}>
                            <div className="burger__item"></div>  
                        </button>   
                        <div className={`burgerMenu ${this.props.burgerMenu ? 'active' : null}`}>
                            <div className="burgerMenu__inner">
                                <nav className="nav">
                                    <div className="nav__link" onClick={() => scrollToSection(document.querySelector('.intro'))}>
                                        <li className="nav__link">Heim</li>
                                        <img src={home} alt="" />
                                    </div>
                                    <div className="nav__link"  onClick={() => scrollToSection(document.querySelector('.categories'))}>
                                        <li className="nav__link">Kategorien</li>
                                        <img src={categories} alt="" />
                                    </div>
                                    <div className="nav__link" onClick={() => scrollToSection(document.querySelector('.newProducts'))}>
                                        <li className="nav__link">Neue Produkte</li>
                                        <img src={order} alt="" />
                                    </div>
                                    <div className="nav__link" onClick={() => scrollToSection(document.querySelector('.about'))}>
                                        <li className="nav__link">Über uns</li>
                                        <img src={about} alt="" />
                                    </div>
                                    <div className={`header__search ${this.props.searchNotFound ? 'notFound' : null}`} >
                                        <input type="text" className="header__search--input" placeholder="Suche" value={this.props.searchText} onChange={e => changeNewText(e)} onKeyDown={e => searchProductByEnter(e)}/>
                                        <label>Not Found</label>
                                        <Link to={this.props.foundProduct !== null ? `/${this.props.foundProduct.category}/${this.props.foundProduct.name}` : null} className={this.props.foundProduct === null ? 'disabled' : null}><img src={search} alt="" width={18} className="header__search--img" onClick={openItemInfo}/></Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;