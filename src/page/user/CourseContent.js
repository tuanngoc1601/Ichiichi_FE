import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllWords } from '../../redux/apiRequests';
import { useSelector, useDispatch } from 'react-redux';
import ContentHeader from '../../component/ContentHeader';
import CourseNavigate from '../../component/user/CourseNavigate';
import CourseContentList from '../../component/user/CourseContentList';
import Loading from '../../component/Loading';

const CourseContent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const wordArrRedux = useSelector(state => state.word.wordArr);
    const pendding = useSelector(state => state.word.pendding);
    const [listWords, setListWords] = useState(wordArrRedux);

    useEffect(() => {
        getAllWords(id, dispatch);
    }, []);

    useEffect(() => {
        setListWords(wordArrRedux);
    }, [wordArrRedux]);

    if(pendding) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <ContentHeader />
            <div className="container">
                <div className="w-75 mx-auto">
                    <CourseNavigate id={id} />
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