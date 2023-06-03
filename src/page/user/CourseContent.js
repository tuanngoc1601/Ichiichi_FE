import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courseService } from '../../service';
import ContentHeader from '../../component/ContentHeader';
import CourseNavigate from '../../component/user/CourseNavigate';
import CourseContentList from '../../component/user/CourseContentList';

const CourseContent = () => {
    const { id } = useParams();
    const [listWords, setListWords] = useState([]);

    const getdataWords = async (course_id) => {
        let words = await courseService.getAllWords(course_id);
        setListWords(words.data.allWords);
    }

    useEffect(() => {
        getdataWords(id);
    }, []);

    return (
        <>
            <ContentHeader />
            <div className="container">
                <div className="w-75 mx-auto">
                    <CourseNavigate />
                    <CourseContentList
                        listWords={listWords}
                        course_id={id}
                    />
                </div>
            </div>
        </>
    )
}

export default CourseContent