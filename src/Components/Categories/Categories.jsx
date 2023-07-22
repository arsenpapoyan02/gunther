import React from "react";
import './categories.scss';
import { Link } from "react-router-dom";

class Categories extends React.Component {
    render() {

        const defaultCurrentPage = () => {
            this.props.defaultCurrentPage();
            this.props.switchHeaderStyle(false);
            this.props.showBurgerMenu(false);
            document.body.classList = '';
            localStorage.setItem('currentPage', 1);
        }

        return (
            <section className="categories">
                <div className="container">
                    <h1 className="section__title">Kategorien</h1>
                    <div className="categories__inner">
                        <div className="categories__inner--grid">
                            <Link to='/categories/wasserhahn' className="categories__grid--item item1" onClick={defaultCurrentPage}>
                                <div>
                                    <h3 className="categories__grid--item--title">Wasserhähne</h3>
                                </div>
                            </Link>
                            <Link to='/categories/bidets' className="categories__grid--item item2" onClick={defaultCurrentPage}>
                                <div>
                                    <h3 className="categories__grid--item--title">Bidets</h3>
                                </div>
                            </Link>
                            <Link to='/categories/duschabflusse' className="categories__grid--item item3" onClick={defaultCurrentPage}>
                                <div>
                                    <h3 className="categories__grid--item--title">Duschabflüsse</h3>
                                </div>
                            </Link>
                            <Link to='/categories/zubehor' className="categories__grid--item item4" onClick={defaultCurrentPage}>
                                <div>
                                    <h3 className="categories__grid--item--title">Zubehör</h3>
                                </div>
                            </Link>
                            <Link to='/categories/duschen' className="categories__grid--item item5" onClick={defaultCurrentPage}>
                                <div>
                                    <h3 className="categories__grid--item--title">Duschen</h3>
                                </div>
                            </Link>
                            <Link to="/categories/waschbecken" className="categories__grid--item item6" onClick={defaultCurrentPage}>
                                <div>
                                    <h3 className="categories__grid--item--title">Waschbecken</h3>
                                </div>
                            </Link>
                            <Link to='/categories/ersatzteile' className="categories__grid--item item7" onClick={defaultCurrentPage}>
                                <div>
                                    <h3 className="categories__grid--item--title">Ersatzteile</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Categories;