import React from "react";
import './notification.scss';
import close from '../Cookies/close.png';

class Notification extends React.Component {
    render() {

        const closeNotification = async () => {
            const notificationText = this.props.notificationText;
            await this.props.switchNotification(false, notificationText);
        }

        if(this.props.notification) {
            setTimeout(async () => {
                const notificationText = this.props.notificationText;
                await this.props.switchNotification(false, notificationText);
            }, 3000);
        }

        return (
            <div className={`notification ${this.props.notification ? 'showed' : null}`}>
                <div className="notification__inner">
                    <p>{this.props.notificationText}</p>
                    <img src={close} alt="" width={20} onClick={closeNotification}/>
                </div>
            </div>
        )
    }
}

export default Notification;