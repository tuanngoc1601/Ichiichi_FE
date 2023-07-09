import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRandomQuestionTest, getQuestionById } from '../../redux/apiRequests';
import { testService } from '../../service';
import ContentHeader from '../../component/ContentHeader';
import ResultTestModal from '../../component/user/ResultTestModal';
import Loading from '../../component/Loading';


const NewLineText = (props) => {
    const text = props.text;
    const newText = text?.split('\n').map((str, index) => <p key={index}>{str}</p>);
    return newText;
}

const TestRandomQuestion = () => {
    // const { id } = useParams();
    const dispatch = useDispatch();
    const scrollContainerRef = useRef(null);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const allRandomQuestionRedux = useSelector(state => state.tests.allRandomQuestions);
    const questionRedux = useSelector(state => state.tests.question);
    const pendding = useSelector(state => state.tests.pendding);
    const [allQuestions, setAllQuestions] = useState(allRandomQuestionRedux);
    const [question, setQuestion] = useState(questionRedux);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [listAnswer, setListAnswer] = useState({});
    const [explanation, setExplanation] = useState('');
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

    const handlePrevQuestion = () => {
        setActiveQuestion(prev => prev - 1);
        setAnswerIndex(null);
        setCorrectAnswerIndex(null);
        setExplanation('');
        setSelectedAnswer('');
    }

    const handleNextQuestion = () => {
        if (activeQuestion !== allQuestions.length - 1) {
            setActiveQuestion(prev => prev + 1);
            setAnswerIndex(null);
            setCorrectAnswerIndex(null);
            setExplanation('');
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

    const handleSubmitAnswer = async (idTest, answer, index) => {
        if (selectedAnswer === '') {
            setSelectedAnswer(answer);
            setAnswerIndex(index);
            const correctAnswer = await testService.getCorrectAnswerService(allQuestions[activeQuestion].id);
            let data = {
                user_id: 1,
                test_id: idTest
            }
            if (answer === correctAnswer.data.right_answer) {
                setCorrectAnswer(true);
                await testService.addResultQuestionService({
                    ...data,
                    is_correct: true
                })
            } else {
                setCorrectAnswer(false);
                await testService.addResultQuestionService({
                    ...data,
                    is_correct: false
                })
            }
            setCorrectAnswerIndex(listAnswer.answers.indexOf(correctAnswer.data.right_answer));
            setExplanation(correctAnswer.data.explanation);
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
        getAllRandomQuestionTest(5, dispatch);
    }, []);

    useEffect(() => {
        setAllQuestions(allRandomQuestionRedux);
        setQuestion(questionRedux);
    }, [allRandomQuestionRedux, questionRedux]);

    useEffect(() => {
        getQuestionContent();
    }, [allQuestions, activeQuestion]);

    useEffect(() => {
        let newListAnswer = [
            question.right_answer,
            question.wrong_answer_first,
            question.wrong_answer_second,
            question.wrong_answer_third
        ].sort(() => 0.5 - Math.random());
        let idQuestion = question.id;
        setListAnswer({
            answers: newListAnswer,
            id: idQuestion
        });
    }, [question]);

    if (pendding) {
        return (
            <Loading />
        )
    }

    if (allQuestions.length === 0) {
        return (
            <>
                <ContentHeader />
                <h2 className="mt-5">このコースに関する質問は見つかりませんでした</h2>
            </>
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
                type={"incorrect"}
            />
            <div className="container">
                <div className="w-75 mx-auto">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-start my-4">
                            <Link to="/">
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
                        <div className="custom-scroll-container" ref={scrollContainerRef}>
                            <div className="w-75 mx-auto overflow-auto px-4" style={{ height: "380px" }}>
                                <div className="row">
                                    <div className="text-start mt-3">
                                        <NewLineText text={question.detail} />
                                    </div>
                                </div>
                                <div className="row mt-1 mb-2">
                                    <h5 className="fw-bold text-start">答えは？選んでください。</h5>
                                    <div className="row g-3">
                                        {listAnswer.answers?.length > 0 &&
                                            listAnswer.answers.map((answer, index) => {
                                                return (
                                                    <div key={index} className="col-6">
                                                        <div
                                                            type="button"
                                                            className={`p-3 border rounded bg-answer ${onSelectedAnswer(index)}`}
                                                            onClick={() => handleSubmitAnswer(listAnswer.id, answer, index)}
                                                        >
                                                            {answer}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {explanation !== '' &&
                                    <div className="row d-flex mt-5">
                                        <p className="col-2 p-0 text-center text-danger fw-bold">回答：</p>
                                        <p className="col-10 p-0 pe-4 text-start">{explanation}</p>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-between">
                                <button
                                    className="border-0 px-4 py-2 rounded"
                                    type="button"
                                    style={{ backgroundColor: '#D7D7D7' }}
                                    disabled={activeQuestion === 0 ? true : false}
                                    onClick={() => handlePrevQuestion()}
                                >
                                    <i className="fas fa-arrow-left fs-5"></i>
                                </button>
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

export default TestRandomQuestion