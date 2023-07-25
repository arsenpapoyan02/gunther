const CLOSE_COOKIES = 'CLOSE-COOKIES'; 
const NOTIFICATION = 'NOTIFICATION'; 

const initialState = {
    cookies: true,
    notification: false,
    notificationText: '',
    notificationTextNotFoundCategory: 'Leider haben wir diese Kategorie im Moment nicht. Demnächst!'
}   

const cookiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_COOKIES: 
            return {
                ...state,
                cookies: false
            }
        case NOTIFICATION:
            return {
                ...state,
                notification: action.bool,
                notificationText: action.text
            }
        default:
            return state;
    }
}

export const closeCookies = () => ({type: CLOSE_COOKIES});
export const switchNotification = (bool, text) => ({type: NOTIFICATION, bool, text});

export default cookiesReducer;