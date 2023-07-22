import React from 'react';
import './App.scss';
import HeaderContainer from '../Header/HeaderContainer';
import IntroContainer from '../Intro/IntroContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';
import NewProductsContainer from '../New Products/NewProductsContainer';
import About from '../About/About';
import Footer from '../Footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <HeaderContainer />
                <IntroContainer />
                <CategoriesContainer />
                <NewProductsContainer />
                <About />
                <Footer />
            </div>
        )
    }
}

export default App;
