import React from 'react'
import '../../sass/App.scss';

const Notification = (props) => {
    return (
        <div className={`notification_container ${props.notification ? "show" : ""}`}>
            <p>{props.message}</p>
        </div>
    )
}

export default React.memo(Notification);