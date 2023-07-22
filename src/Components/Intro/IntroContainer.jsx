import { connect } from "react-redux";
import Intro from "./Intro";
import { changeSliderButton, changeSlidesStyle, checkIsCanSlideByTime, firstSlide } from "../../Redux/sliderReducer";

const mapStateToProps = (state) => ({
    currentButton: state.slider.currentButton,
    slidesStyle: state.slider.slidesStyle,
    canSlide: state.slider.canSlide,
    firstSlideBool: state.slider.firstSlideBool
})

const IntroContainer = connect(mapStateToProps, {changeSliderButton, changeSlidesStyle, checkIsCanSlideByTime, firstSlide})(Intro);

export default IntroContainer;