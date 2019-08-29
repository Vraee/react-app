import React from 'react';
import { connect } from 'react-redux';

import { clearNotification } from '../reducers/notificationReducer';

const Notification = (props) => {
    return (
        <div className='alert'>
            { props.notification }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    };
};

export default connect(mapStateToProps, { clearNotification })(Notification);