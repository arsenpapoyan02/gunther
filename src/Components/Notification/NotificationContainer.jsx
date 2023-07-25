import { connect } from "react-redux";
import Notification from "./Notification";
import { switchNotification } from "../../Redux/cookiesReducer";

const mapStateToProps = (state) => ({
    notification: state.cookies.notification,
    notificationText: state.cookies.notificationText,
    notificationTextNotFoundCategory: state.cookies.notificationTextNotFoundCategory
})

const NotificationContainer = connect(mapStateToProps, {switchNotification})(Notification);

export default NotificationContainer;