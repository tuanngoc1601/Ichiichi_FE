import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourses } from '../../redux/apiRequests';
import UserHeader from '../../component/UserHeader';
import CourseItem from '../../component/user/CourseItem';
import CourseContentModal from '../../component/user/CourseContentModal';
import Loading from '../../component/Loading';

const UserHomePage = () => {
    const [modalShow, setModalShow] = useState(false);
    const courseRedux = useSelector((state) => state.courses.courseArr);
    const searchCourseRedux = useSelector((state) => state.courses.searchCourse);
    const pendding = useSelector((state) => state.courses.pendding);
    const dispatch = useDispatch();
    const [courses, setCourses] = useState(courseRedux);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 6;
    const [id, setId] = useState();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getAllCourses(dispatch);
    }, []);

    useEffect(() => {
        setCourses(courseRedux);
        setTotalPages(Math.ceil(courses.length / itemsPerPage));
    }, [courseRedux, searchTerm]);

    useEffect(() => {
        setCourses(searchCourseRedux);
    }, [searchCourseRedux]);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = courses.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    if (pendding) {
        return (
            <Loading />
        )
    }

    if (courses.length <= 0) {
        return (
            <>
                <UserHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <h2 className="mt-5">コースが見つかりませんでした</h2>
            </>
        )
    }

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
            <div className="container position-relative">
                <div className="row row-cols-3 mt-2"  style={{ minHeight: '550px' }}>
                    {subset.length > 0 &&
                        subset.map((course, index) => {
                            const { course_id, process, score } = course;
                            const { title, description, image } = course.Course;
                            return (
                                <div key={index} className="col d-flex justify-content-center">
                                    <CourseItem
                                        setModalShow={setModalShow}
                                        id={course_id} setId={setId}
                                        process={process} score={score}
                                        title={title} setTitle={setTitle}
                                        image={image} setImage={setImage}
                                        description={description} setDescription={setDescription}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageChange}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    pageCount={totalPages}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default UserHomePage