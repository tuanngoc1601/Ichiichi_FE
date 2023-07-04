import React from 'react';
import { useRef } from 'react';
import WordItem from './WordItem';

const CourseContentList = (props) => {
    const scrollContainerRef = useRef(null);
    return (
        <div className="custom-scroll-container" ref={scrollContainerRef}>
            <div className="w-100 border border-1 border-secondary pb-3 overflow-auto list-word">
                <div className="container">
                    {props.listWords.length > 0 &&
                        props.listWords.map((word, index) => {
                            return (
                                <WordItem
                                    key={word.id}
                                    id={word.id}
                                    course_id={props.course_id}
                                    content={word.content}
                                    index={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseContentList