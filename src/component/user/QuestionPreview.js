import React from 'react';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const NewLineText = (props) => {
    const text = props.text;
    const newText = text?.split('\n').map((str, index) => <p key={index}>{str}</p>);
    return newText;
}

const QuestionPreview = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const invokeCollapse = () => {
        return setIsVisible(!isVisible);
    }

    return (
        <div className="mb-4">
            <div 
                className="d-flex align-items-center justify-content-between px-3 py-2 border border-dark"
                role="button"
                style={{ backgroundColor: props.test.is_correct ? "#61EE88" : "#F87575" }}
                onClick={invokeCollapse}
            >
                <h4 className="m-0">{props.idx + 1}/{props.totalQuestions}</h4>
                {isVisible ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
            </div>
            <Collapse in={isVisible} appear={true}>
                <div className="px-3 py-2 border border-dark" style={{ backgroundColor: "#D9D9D9" }}>
                    <h5 className="fw-bold">{props.test.Test.title}</h5>
                    <NewLineText text={props.test.Test.detail} />
                    <h5 className="fw-bold mt-2">答えは？選んでください。</h5>
                    <p className="fw-bold">正解：&nbsp;{props.test.Test.right_answer}</p>
                    {!props.test.is_correct && <p className="fw-bold">選択した答え：&nbsp;{props.test.answer}</p>}
                    <div className="row d-flex px-2">
                        <p className="col-1 p-0 text-end text-danger fw-bold">回答：</p>
                        <p className="col-11">{props.test.Test.explanation}</p>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default QuestionPreview