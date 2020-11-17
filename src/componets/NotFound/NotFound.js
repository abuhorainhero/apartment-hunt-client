import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className = "text-center text-danger mt-5">
            <h5>This is url Not Found</h5>
            <Link to="/home">Back to Home</Link>
        </div>
    );
};

export default NotFound;