const CHANGE_SLIDER_BUTTON = 'CHANGE-SLIDER-BUTTON';
const CHANGE_SLIDES_STYLE = 'CHANGE-SLIDES-STYLE';
const SLIDE_BY_TIME = 'SLIDE-BY-TIME';
const FIRST_SLIDE = 'FIRST-SLIDE';
const CLOSE_COOKIES = 'CLOSE-COOKIES'; 

const initialState = {
    currentButton: 1,
    slidesStyle: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        transition: 'all .5s linear',
        right: '0'
    },
    canSlide: true,
    firstSlideBool: true,
    cookies: true
}   

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SLIDER_BUTTON:
            return {
                ...state,
                currentButton: action.button
            }
        case CHANGE_SLIDES_STYLE: 
            return {
                ...state,
                slidesStyle: {...state.slidesStyle, right: action.percent}
            }
        case SLIDE_BY_TIME:
            return {
                ...state,
                canSlide: action.bool
            }
        case FIRST_SLIDE: 
            return {
                ...state,
                firstSlideBool: action.bool
            }
        default:
            return state;
    }
}

export const changeSliderButton = (button) => ({type: CHANGE_SLIDER_BUTTON, button});
export const changeSlidesStyle = (percent) => ({type: CHANGE_SLIDES_STYLE, percent});
export const checkIsCanSlideByTime = (bool) => ({type: SLIDE_BY_TIME, bool});
export const firstSlide = (bool) => ({type: FIRST_SLIDE, bool});

export default sliderReducer;