import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuestionCourse, getQuestionById } from '../../redux/apiRequests';
import { getCorrectAnswerService } from '../../service/testService';
import ContentHeader from '../../component/ContentHeader';
import ResultTestModal from '../../component/user/ResultTestModal';
import Loading from '../../component/Loading';

const NewLineText = (props) => {
    const text = props.text;
    const newText = text?.split('\n').map((str, index) => <p key={index}>{str}</p>);
    return newText;
}

const CourseTest = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const allQuestionRedux = useSelector(state => state.tests.allQuestions);
    const questionRedux = useSelector(state => state.tests.question);
    const pendding = useSelector(state => state.tests.pendding);
    const [allQuestions, setAllQuestions] = useState(allQuestionRedux);
    const [question, setQuestion] = useState(questionRedux);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [listAnswer, setListAnswer] = useState([]);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    })
    const [modalShow, setModalShow] = useState(false);

    const getQuestionContent = () => {
        if (allQuestions.length > 0) {
            getQuestionById(allQuestions[activeQuestion].id, dispatch);
        }
    }

    const handleNextQuestion = () => {
        if (activeQuestion !== allQuestions.length - 1) {
            setActiveQuestion(prev => prev + 1);
            setAnswerIndex(null);
            setCorrectAnswerIndex(null);
        }
        setSelectedAnswer('');
        setResult((prev) => (
            correctAnswer ? {
                ...prev,
                score: prev.score + 10,
                correctAnswers: prev.correctAnswers + 1,
            } : {
                ...prev, wrongAnswers: prev.wrongAnswers + 1
            }
        ))
        if (activeQuestion === allQuestions.length - 1) {
            setTimeout(() => {
                setModalShow(true);
            }, 1000);
        }
    }

    const handleSubmitAnswer = async (answer, index) => {
        if (selectedAnswer === '') {
            setSelectedAnswer(answer);
            setAnswerIndex(index);
            const correctAnswer = await getCorrectAnswerService(allQuestions[activeQuestion].id);
            if (answer === correctAnswer.data.right_answer) {
                setCorrectAnswer(true);
            } else {
                setCorrectAnswer(false);
            }
            setCorrectAnswerIndex(listAnswer.indexOf(correctAnswer.data.right_answer));
        }
    }

    const onSelectedAnswer = (index) => {
        let bg = '';
        if (answerIndex === correctAnswerIndex) {
            if (index === answerIndex) bg = "bg-correct-answer";
        } else {
            if (index === answerIndex) bg = "bg-incorrect-answer";
            if (index === correctAnswerIndex) bg = "bg-correct-answer";
        }
        return bg;
    }

    useEffect(() => {
        getAllQuestionCourse(id, dispatch);
    }, []);

    useEffect(() => {
        setAllQuestions(allQuestionRedux);
        setQuestion(questionRedux);
    }, [allQuestionRedux, questionRedux]);

    useEffect(() => {
        getQuestionContent();
    }, [allQuestions, activeQuestion]);

    useEffect(() => {
        let NewListAnswer = [
            question.right_answer,
            question.wrong_answer_first,
            question.wrong_answer_second,
            question.wrong_answer_third
        ].sort(() => 0.5 - Math.random());
        setListAnswer(NewListAnswer);
    }, [question]);

    if (pendding) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <ContentHeader />
            <ResultTestModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                result={result}
                total_questions={allQuestions.length}
                course_id={id}
            />
            <div className="container">
                <div className="w-75 mx-auto">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-start my-4">
                            <Link to={`/course/${id}`}>
                                <button
                                    className="border-0 px-3 py-2 rounded"
                                    type="button"
                                >
                                    <i className="fas fa-arrow-left fs-5"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-75 mx-auto">
                        <div className="row">
                            <h3 className="fw-bold">{activeQuestion + 1}/{allQuestions.length} {question.title}</h3>
                        </div>
                        <div className="w-75 mx-auto">
                            <div className="row">
                                <div className="text-start mt-3 overflow-auto" style={{ height: '180px' }}>
                                    <NewLineText text={question.detail} />
                                </div>
                            </div>
                            <div className="row mt-1">
                                <h5 className="fw-bold text-start">答えは？選んでください。</h5>
                                <div className="row g-3">
                                    {listAnswer.length > 0 &&
                                        listAnswer.map((answer, index) => {
                                            return (
                                                <div key={index} className="col-6">
                                                    <div
                                                        type="button"
                                                        className={`p-3 border rounded bg-answer ${onSelectedAnswer(index)}`}
                                                        onClick={() => handleSubmitAnswer(answer, index)}
                                                    >
                                                        {answer}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-end">
                                <button
                                    className="border-0 px-4 py-2 rounded"
                                    type="button"
                                    style={{ backgroundColor: '#69EF8F' }}
                                    disabled={selectedAnswer === '' ? true : false}
                                    onClick={() => handleNextQuestion()}
                                >
                                    {activeQuestion !== allQuestions.length - 1 ? (<i className="fas fa-arrow-right fs-5"></i>) : "完了"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseTest