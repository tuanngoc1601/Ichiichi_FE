import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoPlayer from './VideoPlayer';

const NewLineText = (props) => {
    const text = props.text;
    const newText = text.split('\\n').map((str, index) => <p key={index}>{str}</p>);
    return newText;
}

const ModalVideo = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    近所と「{props.content}」
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col-7 d-flex justify-content-center">
                            <div className="w-100">
                                <VideoPlayer 
                                    detail_id={props.video.id}
                                    link={props.video.link}
                                    course_id={props.course_id}
                                    content_id={props.content_id}
                                    watched={props.watched}
                                    setWatched={props.setWatched}
                                />
                            </div>
                        </div>
                        <div className="col-5 mt-4">
                            <div className="w-100 border border-1 border-secondary rounded overflow-auto shadow video-detail">
                                <p className="text-center fs-5 m-0 py-2">説明</p>
                                <div className="px-3 overflow-auto">
                                    <NewLineText text={props.video.description} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>キャンセル</Button>
                <Button variant="primary" onClick={props.onHide}>オッケー</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalVideo