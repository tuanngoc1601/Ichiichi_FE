import React from 'react';
import VideoItem from './VideoItem';

const ListVideoContent = (props) => {
    return (
        <div className="row mt-2">
            <div className="col-1"></div>
            <div className="col-11">
                <div className="row">
                    <h4 className="text-start">角度から単語のビデオを勉強しましょう</h4>
                    <div className="col-12 overflow-auto border border-1 border-secondary rounded text-start px-4 mt-2 list-video">
                        <div className="row row-cols-4 mt-4">
                            {props.listVideoOfWord.length > 0 &&
                                props.listVideoOfWord.map((video, index) => {
                                    return (
                                        <div key={index} className="col d-flex justify-content-center">
                                            <VideoItem 
                                                setModalShow={props.setModalShow} 
                                                setVideoModal={props.setVideoModal}
                                                video={video}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListVideoContent