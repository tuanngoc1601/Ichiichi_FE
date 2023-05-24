import React from 'react';
import { Link } from 'react-router-dom';

const WordItem = () => {
    return (
        <Link to="/course/id/content">
            <div className="w-100 d-flex justify-content-between align-items-center border border-1 rounded border-secondary mt-3 px-4 py-2">
                <span className="text-body" style={{ textDecoration: 'none' }}>1. Xin Chào</span>
                <span className="text-body"><i className="fas fa-chevron-right"></i></span>
            </div>
        </Link>
    )
}

export default WordItem