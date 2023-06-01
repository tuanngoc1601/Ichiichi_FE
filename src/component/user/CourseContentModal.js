import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
                        <div className="col-6 d-flex justify-content-center">
                            <div className="w-75">
                                <img src={props.image}
                                    className="object-fit-cover rounded"
                                    style={{
                                        height: '160px',
                                        width: '100%'
                                    }}
                                    alt="course"
                                />
                                <p className="text-center mt-4">{props.title}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <textarea
                                className="w-100 border-0"
                                style={{
                                    outline: 'none',
                                    overflow: 'auto',
                                    height: '200px',
                                    resize: 'none',
                                    backgroundColor: '#fff'
                                }}
                                disabled
                            >
                                {props.description}
                            </textarea>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>キャンセル</Button>
                <Link to={`/course/${props.id}`}>
                    <Button variant="primary">オッケー</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default CourseContentModal