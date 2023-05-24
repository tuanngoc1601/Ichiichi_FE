import React from 'react';
import { Link } from 'react-router-dom';

const WordMeaning = () => {
    return (
        <div className="row">
            <div className="col-1 d-flex justify-content-end align-items-start my-2">
                <Link to="/course/id">
                    <button
                        className="border-0 px-3 py-2 rounded"
                        type="button"
                    >
                        <i className="fas fa-arrow-left fs-5"></i>
                    </button>
                </Link>
            </div>
            <div className="col-11">
                <div className="row my-2">
                    <h4 className="text-start">形容</h4>
                    <div className="col-12 overflow-auto border border-1 border-secondary word-meaning rounded text-start py-2 mt-1">
                        この単語は他の人と挨拶する時に使います。以下のように角度から単語の使い方のビデオがあります。この単語は他の人と挨拶する時に使います。以下のように角度から単語の使い方のビデオがあります。この単語は他の人と挨拶する時に使います。以下のように角度から単語の使い方のビデオがあります。
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordMeaning