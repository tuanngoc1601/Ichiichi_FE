import React from 'react';
import { Link } from 'react-router-dom';

const CourseNavigate = (props) => {
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-start my-2">
                <Link to="/">
                    <button
                        className="border-0 px-3 py-2 rounded"
                        type="button"
                    >
                        <i className="fas fa-arrow-left fs-5"></i>
                    </button>
                </Link>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center fs-5">
                    <span>単語リスト</span>
                    <i className="fas fa-caret-right fs-3 mx-2"></i>
                    <Link to={`/course/${props.id}/test`}>
                        <span
                            className="px-2 rounded"
                            style={{ backgroundColor: '#ABFFA9' }}
                        >
                            テスト
                        </span>
                    </Link>
                </div>
                <div className="form-group d-flex align-items-center">
                    <label
                        className="fs-5 me-2"
                        style={{ width: '60px' }}
                    >
                        検索
                    </label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    )
}

export default CourseNavigate