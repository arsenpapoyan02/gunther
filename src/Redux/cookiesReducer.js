const CLOSE_COOKIES = 'CLOSE-COOKIES'; 

const initialState = {
    cookies: true
}   

const cookiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_COOKIES: 
            return {
                ...state,
                cookies: false
            }
        default:
            return state;
    }
}

export const closeCookies = () => ({type: CLOSE_COOKIES});

export default cookiesReducer;