import React from 'react';
import { Link } from 'react-router-dom';
import CourseImage from '../../assets/course.jpg';

const CourseItem = (props) => {
    return (
        <div
            className="my-4"
            style={{ width: '250px' }}
        >
            <div>
                <img src={CourseImage}
                    className="object-fit-cover rounded"
                    style={{
                        height: '160px',
                        width: '100%'
                    }}
                    alt="course"
                />
            </div>
            <div className="my-1">
                <p className="fs-5 mb-2">スポーツテーマ</p>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.setModalShow(true)}
                >
                    詳細
                </button>
            </div>
        </div>
    )
}

export default CourseItem