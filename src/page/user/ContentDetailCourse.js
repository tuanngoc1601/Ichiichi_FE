import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getWordById, getAllVideoDetails } from '../../redux/apiRequests';
import ContentHeader from '../../component/ContentHeader';
import WordMeaning from '../../component/user/WordMeaning';
import ListVideoContent from '../../component/user/ListVideoContent';
import ModalVideo from '../../component/user/ModalVideo';
import Loading from '../../component/Loading';

const ContentDetailCourse = () => {
    const { id, wordId } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const wordRedux = useSelector((state) => state.word.word);
    const videosOfWordRedux = useSelector((state) => state.videos.videos);
    const pendding = useSelector((state) => state.videos.pendding);
    const dispatch = useDispatch();
    const [wordContent, setWordContent] = useState(wordRedux.content);
    const [meaning, setMeaning] = useState(wordRedux.mean);
    const [listVideoOfWord, setListVideoOfWord] = useState(videosOfWordRedux);
    const [videoModal, setVideoModal] = useState({});

    useEffect(() => {
        getWordById(wordId, dispatch);
        getAllVideoDetails(wordId, dispatch);
    }, []);

    useEffect(() => {
        setMeaning(wordRedux.mean);
        setWordContent(wordRedux.content);
        setListVideoOfWord(videosOfWordRedux);
    }, [wordRedux, videosOfWordRedux]);

    if(pendding) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <ContentHeader />
            <div className="container">
                <div className="w-75 mx-auto pe-5">
                    <ModalVideo
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        content={wordContent}
                        video={videoModal}
                    />
                    <WordMeaning
                        course_id={id}
                        meaning={meaning}
                    />
                    <ListVideoContent 
                        setModalShow={setModalShow} 
                        listVideoOfWord={listVideoOfWord}
                        setVideoModal={setVideoModal}
                    />
                </div>
            </div>
        </>
    )
}

export default ContentDetailCourse