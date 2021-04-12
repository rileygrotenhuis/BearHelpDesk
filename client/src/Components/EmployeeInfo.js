// React Modules
import React from 'react';

// Employee Info Component
function EmployeeInfo(props) {
    // JSX
    return (
        <div className="card" style={{width: "20rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.firstName} {props.lastName}</h5>
                <h6 className="card-text">Password: {props.password}</h6>
                <h6 className="card-subtitle">Email: {props.email}</h6>
            </div>
        </div>
    );
}

// Export
export default EmployeeInfo;