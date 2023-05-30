import React from 'react';
import { useState } from 'react';
import WordMeaning from '../../component/user/WordMeaning';
import ListVideoContent from '../../component/user/ListVideoContent';
import ModalVideo from '../../component/user/ModalVideo';

const ContentDetailCourse = () => {
    const [modalShow, setModalShow]= useState(false);

    return (
        <div className="w-75 mx-auto pe-5">
            <ModalVideo 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <WordMeaning />
            <ListVideoContent setModalShow={setModalShow} />
        </div>
    )
}

export default ContentDetailCourse