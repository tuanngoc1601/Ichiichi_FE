import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getWordById, getAllVideoDetails } from '../../redux/apiRequests';
import { courseService } from '../../service';
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
    const [videoWatched, setVideoWatched] = useState([]);
    const [watched, setWatched] = useState(false);

    const getAllVideoWatchedByContentId = async () => {
        let data = await courseService.getAllVideoWatchedService(parseInt(wordId));
        setVideoWatched(data.data.data);
    }

    useEffect(() => {
        getWordById(wordId, dispatch);
        getAllVideoDetails(wordId, dispatch);
        getAllVideoWatchedByContentId();
    }, []);

    useEffect(() => {
        getAllVideoWatchedByContentId();
    }, [watched])

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
                        course_id={id}
                        content_id={wordId}
                        content={wordContent}
                        video={videoModal}
                        watched={watched}
                        setWatched={setWatched}
                    />
                    <WordMeaning
                        course_id={id}
                        meaning={meaning}
                    />
                    <ListVideoContent 
                        setModalShow={setModalShow} 
                        listVideoOfWord={listVideoOfWord}
                        setVideoModal={setVideoModal}
                        videoWatched={videoWatched}
                    />
                </div>
            </div>
        </>
    )
}

export default ContentDetailCourse