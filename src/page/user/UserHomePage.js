import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourses } from '../../redux/apiRequests';
import UserHeader from '../../component/UserHeader';
import CourseItem from '../../component/user/CourseItem';
import CourseContentModal from '../../component/user/CourseContentModal';

const UserHomePage = () => {
    const [modalShow, setModalShow] = useState(false);
    const courseRedux = useSelector((state) => state.courses.courseArr);
    const searchCourseRedux = useSelector((state) => state.courses.searchCourse);
    const dispatch = useDispatch();
    const [courses, setCourses] = useState(courseRedux);
    const [searchTerm, setSearchTerm] = useState('');
    const [id, setId] = useState();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getAllCourses(dispatch);
    }, []);

    useEffect(() => {
        setCourses(courseRedux);
    }, [courseRedux, searchTerm]);
    
    useEffect(() => {
        setCourses(searchCourseRedux);
    }, [searchCourseRedux]);

    return (
        <>
            <CourseContentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
                title={title}
                image={image}
                description={description}
            />
            <UserHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="container">
                <div className="row row-cols-3 mt-2">
                    {courses.length > 0 &&
                        courses.map((course, index) => {
                            const { id, title, description, image } = course;
                            return (
                                <div key={index} className="col d-flex justify-content-center">
                                    <CourseItem
                                        setModalShow={setModalShow}
                                        id={id} setId={setId}
                                        title={title} setTitle={setTitle}
                                        image={image} setImage={setImage}
                                        description={description} setDescription={setDescription}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UserHomePage