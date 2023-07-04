import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { testService } from '../../service';
import ContentHeader from '../../component/ContentHeader';
import QuestionPreview from '../../component/user/QuestionPreview';

const TestResultPreview = () => {
    const { id } = useParams();
    const [allTestPreivew, setAllTestPreview] = useState([]);

    const fetchAllTestPreviewData = async () => {
        let data = await testService.getAllTestPreivewService(1);
        setAllTestPreview(data.data.data);
    }

    useEffect(() => {
        fetchAllTestPreviewData();
    }, []);

    return (
        <>
            <ContentHeader />
            <div className="container">
                <div className="w-50 mx-auto mt-5 pt-3 text-start">
                    {allTestPreivew.length > 0 &&
                        allTestPreivew.map((test, index) => {
                            return (
                                <QuestionPreview 
                                    key={index}
                                    test={test}
                                    idx={index}
                                    totalQuestions={allTestPreivew.length}
                                />
                            )
                        })
                    }
                </div>
                <div className="d-flex justify-content-center my-5">
                    <Link to={`/course/${id}/test`}>
                        <button
                            className="border-0 px-3 py-2 mx-5 rounded"
                            style={{ backgroundColor: "#A9CEC8" }}
                        >
                            もう一回
                        </button>
                    </Link>
                    <Link to="/">
                        <button
                            className="border-0 px-3 py-2 mx-5 rounded"
                            style={{ backgroundColor: "#A9CEC8" }}
                        >
                            戻る
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TestResultPreview