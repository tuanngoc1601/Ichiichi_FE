import React from 'react';
import { useState } from 'react';
import CourseItem from '../../component/user/CourseItem';
import CourseContentModal from '../../component/user/CourseContentModal';

const UserHomePage = () => {
    const [modalShow, setModalShow]= useState(false);
    
    return (
        <>
            <CourseContentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="row row-cols-3 mt-2">
                <div className="col d-flex justify-content-center">
                    <CourseItem setModalShow={setModalShow} />
                </div>
                <div className="col d-flex justify-content-center">
                    <CourseItem setModalShow={setModalShow} />
                </div>
                <div className="col d-flex justify-content-center">
                    <CourseItem setModalShow={setModalShow} />
                </div>
                <div className="col d-flex justify-content-center">
                    <CourseItem setModalShow={setModalShow} />
                </div>
                <div className="col d-flex justify-content-center">
                    <CourseItem setModalShow={setModalShow} />
                </div>
                <div className="col d-flex justify-content-center">
                    <CourseItem setModalShow={setModalShow} />
                </div>
            </div>
        </>
    )
}

export default UserHomePage