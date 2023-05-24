import React from 'react';
import WordItem from './WordItem';

const CourseContentList = () => {
    return (
        <div className="w-100 border border-1 border-secondary pb-3 overflow-auto list-word">
            <div className="container">
                <WordItem />
                <WordItem />
                <WordItem />
                <WordItem />
                <WordItem />
                <WordItem />
                <WordItem />
                <WordItem />
                <WordItem />
                <WordItem />
            </div>
        </div>
    )
}

export default CourseContentList