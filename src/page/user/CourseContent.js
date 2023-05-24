import React from 'react';
import CourseNavigate from '../../component/user/CourseNavigate';
import CourseContentList from '../../component/user/CourseContentList';

const CourseContent = () => {
    return (
        <div className="w-75 mx-auto">
            <CourseNavigate />
            <CourseContentList />
        </div>
    )
}

export default CourseContent