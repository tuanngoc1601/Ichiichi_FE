import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { testService } from '../../service';
import { useEffect } from 'react';

const ResultTestModal = (props) => {
    const navigate = useNavigate();
    const [passTest, setPassTest] = useState();
    const submitResultTest = async () => {
        if (props.type === 'correct') {
            let data = {
                user_id: 1,
                course_id: props.course_id,
                score: props.result.score
            }
            const response = await testService.updateTestScoreService(data);
            console.log(response.data);
        } else {
            navigate("/");
        }
    }
    useEffect(() => {
        setPassTest(props.result.score >= (props.total_questions * 10 * 0.6));
    }, [props.show]);
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    style={{
                        fontSize: "22px"
                    }}
                >
                    <p className="text-center m-0">Khóa học sơ cấp tiếng Việt</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center my-4">
                            {passTest ?
                                <i
                                    className="fas fa-check-circle"
                                    style={{ color: '#3BE23B', fontSize: '70px' }}
                                ></i> :
                                <i
                                    className="far fa-frown rounded-circle"
                                    style={{ color: 'black', fontSize: '80px', backgroundColor: '#FFF100' }}
                                ></i>
                            }
                        </div>
                        <div className="col-12 text-center fs-5 p-0 my-2">
                            {passTest ?
                                <p className="p-1">
                                    おめでとうございます!あなたは
                                    <strong>{props.result.score}/{props.total_questions * 10}</strong>
                                    ポイントで合格しました!
                                </p> :
                                <p>
                                    残念です！あなたは
                                    <strong>{props.result.score}/{props.total_questions * 10}</strong>
                                    点しか取れませんでした!
                                </p>
                            }
                        </div>
                        <div className="col-12 mt-3">
                            <div className="button-group d-flex justify-content-center">
                                {props.type === 'correct' &&
                                    <Link to={`/course/${props.course_id}/test/preview`}>
                                        <Button
                                            className="btn btn-primary text-body mx-4 border-0"
                                            style={{ backgroundColor: '#A9CEC8' }}
                                            onClick={() => submitResultTest()}
                                        >
                                            詳しく
                                        </Button>
                                    </Link>
                                }
                                <Link to={props.type === 'incorrect' ? '/' : `/course/${props.course_id}`}>
                                    <Button
                                        className="btn btn-primary text-body mx-4 border-0"
                                        style={{ backgroundColor: '#A9CEC8' }}
                                        onClick={() => submitResultTest()}
                                    >
                                        {passTest ? "はい！" : "いいよ！"}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ResultTestModal