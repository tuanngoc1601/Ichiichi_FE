import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getWordById } from '../../redux/apiRequests';
import WordMeaning from '../../component/user/WordMeaning';
import ListVideoContent from '../../component/user/ListVideoContent';
import ModalVideo from '../../component/user/ModalVideo';

const ContentDetailCourse = () => {
    const { id, wordId } = useParams();
    const [modalShow, setModalShow]= useState(false);
    const wordRedux = useSelector((state) => state.word.word);
    const dispatch = useDispatch();
    const [meaning, setMeaning] = useState(wordRedux.mean);

    useEffect(() => {
        getWordById(wordId, dispatch);
    },[]);

    useEffect(() => {
        setMeaning(wordRedux.mean);
    }, [wordRedux]);

    return (
        <div className="w-75 mx-auto pe-5">
            <ModalVideo 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <WordMeaning 
                course_id={id} 
                meaning={meaning}
            />
            <ListVideoContent setModalShow={setModalShow} />
        </div>
    )
}

export default ContentDetailCourse