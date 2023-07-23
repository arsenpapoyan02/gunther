import React from "react";
import './cookies.scss';
import close from './close.png';

class Cookies extends React.Component {
    render () {

        const closeCookies = () => {
            this.props.closeCookies();
        }

        const closeCookiesByTime = () => {
            setTimeout(() => {
                closeCookies();
            }, 3000);
        }

        closeCookiesByTime();

        return (
            <div className={`cookies ${!this.props.cookies ? 'disable' : null}`}>
                <p className="cookies__text">Мы используем cookie-файлы для наилучшего представления нашего сайта.</p>
                <img src={close} alt="" width={20} onClick={closeCookies}/>
            </div>
        )
    }
}

export default Cookies;