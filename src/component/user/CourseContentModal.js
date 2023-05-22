import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CourseImage from '../../assets/course.jpg';

const CourseContentModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    コースの内容
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-5 d-flex justify-content-center">
                            <div className="w-75">
                                <img src={CourseImage}
                                    className="object-fit-cover rounded"
                                    style={{
                                        height: '160px',
                                        width: '100%'
                                    }}
                                    alt="course"
                                />
                            </div>
                        </div>
                        <div className="col-7"></div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>キャンセル</Button>
                <Button variant="primary">オッケー</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CourseContentModal