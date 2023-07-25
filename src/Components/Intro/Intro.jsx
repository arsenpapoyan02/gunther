import React from "react";
import './intro.scss';
import bathroom1 from './bathroom1.png';
import bathroom2 from './bathroom2.png';
import bathroom3 from './bathroom3.png';
import CookiesContainer from '../Cookies/CookiesContainer';
import NotificationContainer from "../Notification/NotificationContainer";

class Intro extends React.Component {

    render() {
        const changeSlide = async (e) => {
            const buttons = document.querySelectorAll('.intro__buttons--item');
            const buttonId = e !== null ? parseInt(e.target !== undefined ? e.target.id : e.id) : null;
            for(const i of buttons) {
                i.classList.remove('active');
            }
            this.props.changeSliderButton(buttonId);
            if(e !== null) {
                if(e.target !== undefined) {
                    e.target.classList += ' active';   
                }
            }
            if(e !== null) {
                if(e.target === undefined) {
                    e.classList += ' active';   
                }
            }
            const style = (buttonId * 100) - 100 + '%';
            await this.props.changeSlidesStyle(style);
            canChangeSlideByTime();
        }

        const changeSlideByTime = () => {
            let currentButton = this.props.currentButton + 1 > 3 ? 1 : this.props.currentButton + 1;
            let slide = document.getElementById(`${currentButton} button${currentButton}`)
            changeSlide(slide);
        }

        const canChangeSlideByTime = async () => {
            if(this.props.canSlide) {
                setTimeout(() => {
                    changeSlideByTime();
                    this.props.checkIsCanSlideByTime(true);
                }, 8000);
                await this.props.checkIsCanSlideByTime(false);
            }
        }

        if(this.props.firstSlideBool) {
            canChangeSlideByTime();
            this.props.firstSlide(false);
        }
        
        if(!this.props.firstSlideBool && this.props.canSlide) {
            canChangeSlideByTime();
            this.props.firstSlide(false);
            console.clear();
        }

        return (
            <div className="intro" id="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div className="intro__slider">
                            <div className="intro__slider--images">
                                <img src={bathroom1} alt="" className={`${this.props.currentButton === 1 ? 'active' : null}`}/>
                                <img src={bathroom2} alt="" className={`${this.props.currentButton === 2 ? 'active' : null}`}/>
                                <img src={bathroom3} alt="" className={`${this.props.currentButton === 3 ? 'active' : null}`}/>
                            </div>
                            <div className="intro__slider--slides" style={this.props.slidesStyle}>
                                <div className="intro__item active" id="1">
                                    <h2 className="intro__item--title">Modernes und praktisches Design</h2>
                                </div>
                                <div className="intro__item" id="2">
                                    <h2 className="intro__item--title">Hochwertiger rostfreier Stahl</h2>
                                </div>
                                <div className="intro__item" id="3">
                                    <h2 className="intro__item--title">Leichte Reparatur mit minimalen Kosten</h2>
                                </div>
                            </div>
                            <div className="intro__slider--buttons">
                                <div className={`intro__buttons--item active`} id="1 button1" onClick={(e) => changeSlide(e)}></div>
                                <div className={`intro__buttons--item`} id="2 button2" onClick={(e) => changeSlide(e)}></div>
                                <div className={`intro__buttons--item`} id="3 button3" onClick={(e) => changeSlide(e)}></div>
                            </div>
                        </div>
                        <CookiesContainer />
                        <NotificationContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;